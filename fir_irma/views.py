import json
import requests

from django.shortcuts import render
from django.http import JsonResponse

from fir_irma.decorators import user_is_owner_or_privileged, login_and_perm_required
from fir_irma.settings import settings
from fir_irma.models import IrmaScan
from fir_irma.utils import process_error, ERROR_WRONG_METHOD, ERROR_CLIENT_ERROR, ERROR_NOT_FOUND


def create_api_url(*args):
    def append_part(url, part):
        if not part == "" and part is not None:
            if url[-1] != '/':
                url += '/'
            if part[0] == '/':
                part = part[1:]
            url += part
        return url
    url = settings.IRMA_BASE_URL
    for part in args:
        url = append_part(url, part)
    return url


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
    headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
    response = requests.get(create_api_url('/api/v1/probes'), headers=headers)
    try:
        payload = response.json()
    except ValueError:
        return process_error(request)
    return JsonResponse(payload)

@login_and_perm_required('fir_irma.scan_files')
def irma_scan_new(request):
    if request.method == 'POST':
        headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
        response = requests.post(create_api_url('/api/v1/scans'), headers=headers)
        try:
            payload = response.json()
        except ValueError:
            return process_error(request)
        IrmaScan.objects.create(irma_scan=payload['id'], user=request.user)
        return JsonResponse(payload)
    return process_error(request, error=ERROR_WRONG_METHOD)

@user_is_owner_or_privileged()
def irma_scan_upload(request, **kwargs):
    if request.method == 'POST':
        scan_id = kwargs.get('scan_id')
        scan = kwargs.get('scan')
        try:
            f = request.FILES['file']
        except KeyError:
            return process_error(request, error=ERROR_CLIENT_ERROR)
        upload_file = {'file': f}
        response = requests.post(create_api_url('/api/v1/scans/', scan_id, '/files'), files=upload_file)
        try:
            payload = response.json()
        except ValueError:
            return process_error(request)
        try:
            from fir_artifacts.files import handle_uploaded_file
            import fir_artifacts.models
            handle_uploaded_file(f, "IRMA scanned file", scan)
        except ImportError:
            print "No fir artifact"
            pass
        return JsonResponse(payload)
    return process_error(request, error=ERROR_WRONG_METHOD)

@user_is_owner_or_privileged()
def irma_scan_launch(request, scan_id=None, **kwargs):
    if request.method == 'POST':
        scan = kwargs.get('scan')
        try:
            json_request = json.loads(request.body)
        except:
            return process_error(request, error=ERROR_CLIENT_ERROR)
        scan.probes = json_request.get('probes', 'noprobes')
        if request.user.has_perm('fir_irma.can_force_scan'):
            scan.force = json_request.get('force', False)
        else:
            scan.force = False
        scan.save()
        json_request['force'] = scan.force
        headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
        response = requests.post(create_api_url('/api/v1/scans/', scan_id, '/launch'), headers=headers, json=json_request)
        try:
            payload = response.json()
        except ValueError:
            return process_error(request)
        return JsonResponse(payload)
    return process_error(request, error=ERROR_WRONG_METHOD)


@user_is_owner_or_privileged()
def irma_scan_generic(request, scan_id=None, tail="", **kwargs):
    headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
    response = requests.get(create_api_url('/api/v1/scans/', scan_id, tail), headers=headers)
    try:
        payload = response.json()
    except ValueError:
        return process_error(request)
    return JsonResponse(payload)

@login_and_perm_required('fir_irma.scan_files')
def irma_search(request):
    query = dict()
    name = request.GET.get('name', None)
    if name is None:
        hash_ = request.GET.get('hash', None)
        if hash_ is None:
            return process_error(request, error=ERROR_CLIENT_ERROR)
        query['hash'] = hash_
    else:
        query['name'] = name
    query['offset'] = request.GET.get('offset', 0)
    query['limit'] = request.GET.get('limit', 25)
    headers = {'Content-type': 'application/json', 'Accept': 'application/json'}
    response = requests.get(create_api_url('/api/v1/search/files'), headers=headers, params=query)
    try:
        payload = response.json()
    except ValueError:
        return process_error(request)
    if not 'items' in payload:
        return process_error(request)
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
            'original_total': payload.get('total', 0),
            'total': len(items)
        }
        payload = updated_payload
    else:
        payload['original_total'] = payload.get('total', 0)
    return JsonResponse(payload)

def not_found(request):
    return process_error(request, error=ERROR_NOT_FOUND)

