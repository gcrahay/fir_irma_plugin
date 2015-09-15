import json
from ipware.ip import get_ip

from django.shortcuts import render
from django.http import JsonResponse

from fir_irma.decorators import user_is_owner_or_privileged, login_and_perm_required
from fir_irma.settings import settings
from fir_irma.models import IrmaScan
from fir_irma.utils import process_error, ERROR_NOT_FOUND
from fir_irma import api


@login_and_perm_required('fir_irma.scan_files')
def irma_index(request, sub=''):
    if settings.IRMA_IS_STANDALONE:
        return render(request, 'fir_irma/standalone/interface.html')
    return render(request, 'fir_irma/fir_scan.html')


@login_and_perm_required('fir_irma.scan_files')
def irma_app(request):
    return render(request, 'fir_irma/irma.js', {'refresh': settings.IRMA_REFRESH_MS})


@user_is_owner_or_privileged()
def irma_redirect_index(request, **kwargs):
    return irma_index(request)


@login_and_perm_required('fir_irma.scan_files')
def irma_view(request, name="selection"):
    return render(request, 'fir_irma/views/{0}.html'.format(name))


@login_and_perm_required('fir_irma.scan_files')
def irma_probes(request):
    try:
        code, payload = api.get_probes()
        if 'irma_probes' not in request.session and 'data' in payload:
            if not isinstance(payload['data'], list):
                payload['data'] = [payload['data'], ]
            request.session['irma_probes'] = payload['data']
    except api.APIError as error:
        code = error.code
        payload = error.content
    return JsonResponse(payload, status=code)


@login_and_perm_required('fir_irma.scan_files')
def irma_scan_new(request):
    if request.method == 'POST':
        client_ip = get_ip(request)
        try:
            code, payload = api.new_scan()
            comment = settings.IRMA_SCAN_DESCRIPTION_CALLABLE(user=request.user, scan=payload, ip=client_ip)
            if request.user.is_anonymous():
                IrmaScan.objects.create(irma_scan=payload['id'], client_ip=client_ip, comment=comment)
            else:
                IrmaScan.objects.create(irma_scan=payload['id'], user=request.user,
                                        client_ip=client_ip, comment=comment)
        except api.APIError as error:
            code = error.code
            payload = error.content
    else:
        code, payload = api.APIError.wrong_method()
    return JsonResponse(payload, status=code)


@user_is_owner_or_privileged()
def irma_scan_upload(request, **kwargs):
    if request.method == 'POST':
        scan_id = kwargs.get('scan_id')
        scan = kwargs.get('scan')
        try:
            f = request.FILES['file']
            code, payload = api.upload_files(scan_id, files={'file': f})
            try:
                from fir_artifacts.files import handle_uploaded_file
                import fir_artifacts.models
                handle_uploaded_file(f, "IRMA scanned file", scan)
            except ImportError:
                pass
        except KeyError:
            code, payload = api.APIError.client_error()
        except api.APIError as error:
            code = error.code
            payload = error.content
    else:
        code, payload = api.APIError.wrong_method()
    return JsonResponse(payload, status=code)


@user_is_owner_or_privileged()
def irma_scan_launch(request, scan_id=None, **kwargs):
    if request.method == 'POST':
        scan = kwargs.get('scan')
        try:
            json_request = json.loads(request.body)
            scan.probes = json_request.get('probes', ','.join(request.session.get('irma_probes', [])))
            if request.user.has_perm('fir_irma.can_force_scan'):
                scan.force = json_request.get('force', False)
            else:
                scan.force = False
            scan.save()
            code, payload = api.launch_scan(scan_id, force=scan.force, probes=scan.probes)
        except ValueError:
            code, payload = api.APIError.client_error()
        except api.APIError as error:
            code = error.code
            payload = error.content
    else:
        code, payload = api.APIError.wrong_method()
    return JsonResponse(payload, status=code)


@user_is_owner_or_privileged()
def irma_scan_generic(request, scan_id=None, tail="", **kwargs):
    try:
        code, payload = api.make_api_call(['/api/v1/scans/', scan_id, tail], method=request.method)
    except api.APIError as error:
        code = error.code
        payload = error.content
    return JsonResponse(payload, status=code)


@login_and_perm_required('fir_irma.scan_files')
def irma_search(request):
    try:
        code, payload = api.search(file_hash=request.GET.get('hash', None),
                                   file_name=request.GET.get('name', None),
                                   offset=request.GET.get('offset', 0),
                                   limit=request.GET.get('limit', 25))
        original_count = len(payload['items'])
        if not request.user.has_perm('fir_irma.read_all_results'):
            items = []
            for result in payload['items']:
                if 'scan_id' in result:
                    try:
                        scan = IrmaScan.objects.get(irma_scan=result['scan_id'], user=request.user)
                        items.append(result)
                    except IrmaScan.DoesNotExist:
                        pass
            updated_payload = {
                'items': items,
                'limit': payload.get('limit', 25),
                'offset': payload.get('offset', 0),
                'original_count': original_count,
                'total': len(items)
            }
            payload = updated_payload
        else:
            payload['original_total'] = original_count
    except api.APIError as error:
        code = error.code
        payload = error.content
    return JsonResponse(payload, status=code)


def not_found(request):
    return process_error(request, error=ERROR_NOT_FOUND)

