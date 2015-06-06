from django.core.exceptions import PermissionDenied
from django.http import JsonResponse, Http404, HttpResponseServerError, HttpResponseBadRequest
from fir_irma import api
from fir_irma.models import IrmaScan

from fir_irma.settings import settings

ERROR_NOT_FOUND = 1
ERROR_SERVER_ERROR = 2
ERROR_CLIENT_ERROR = 3
ERROR_WRONG_METHOD = 4
ERROR_UNAUTHORIZED = 5

def process_error(request, error=ERROR_SERVER_ERROR, message=None):
    if request.is_ajax():
        if error == ERROR_NOT_FOUND:
            if message is None:
                message = 'Object not found'
            return JsonResponse({'type':'invalid_request_error', 'message': message}, status=404)
        elif error == ERROR_SERVER_ERROR:
            if message is None:
                message = 'Server error'
            return JsonResponse({'type':'api_error', 'message': message}, status=500)
        elif error == ERROR_CLIENT_ERROR:
            if message is None:
                message = 'Invalid request'
            return JsonResponse({'type':'invalid_request_error', 'message': message}, status=400)
        elif error == ERROR_WRONG_METHOD:
            if message is None:
                message = 'Invalid method'
            return JsonResponse({'type':'invalid_request_error', 'message': message}, status=405)
        elif error == ERROR_UNAUTHORIZED:
            if message is None:
                message = 'Unauthorized'
            return JsonResponse({'type':'invalid_request_error', 'message': message}, status=403)
    else:
        if error == ERROR_NOT_FOUND:
            raise Http404()
        elif error == ERROR_SERVER_ERROR:
            return HttpResponseServerError()
        elif error == ERROR_CLIENT_ERROR or error == ERROR_WRONG_METHOD:
            return HttpResponseBadRequest()
        elif error == ERROR_UNAUTHORIZED:
            raise PermissionDenied

def scan_file(file_object, user):
    try:
        from fir_artifacts.models import Artifact
        from fir_artifacts import Hash
        code, payload = api.new_scan()
        scan_id = payload['id']
        scan = IrmaScan.objects.create(irma_scan=scan_id, user=user)
        api.upload_files(scan_id, files={'file':file_object.file})
        force = user.has_perm('fir_irma.can_force_scan')
        api.launch_scan(scan_id, force=force)
        hashes = file_object.get_hashes()
        for h in hashes:
            try:
                a = Artifact.objects.get(value=hashes[h])
                a.save()
            except Exception:
                a = Artifact()
                a.type = Hash.key
                a.value = hashes[h]
                a.save()
            a.relations.add(scan)
    except api.APIError as error:
        # TODO: Logging
        pass
    except:
        # TODO: Logging
        pass


def fir_files_postsave(sender, **kwargs):
    if kwargs.get('created', False):
        from django.contrib.contenttypes.models import ContentType
        from fir_irma.models import IrmaScan
        irmascan_type = ContentType.objects.get_for_model(IrmaScan)
        instance = kwargs.get('instance')
        if not instance.content_type == irmascan_type:
            try:
                from django.contrib.auth import get_user_model
                User = get_user_model()
            except ImportError:
                from django.contrib.auth.models import User
            related = instance.get_related()
            for field in settings.IRMA_SCAN_FIR_FILES_USER_FIELDS:
                user = getattr(related, field)
                if user is not None and isinstance(user, User) and user.has_perm('fir_irma.scan_files'):
                    scan_file(instance, user)
                    return
