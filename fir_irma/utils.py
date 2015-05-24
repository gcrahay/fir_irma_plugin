from django.core.exceptions import PermissionDenied
from django.http import JsonResponse, Http404, HttpResponseServerError, HttpResponseBadRequest

ERROR_NOT_FOUND = 1
ERROR_SERVER_ERROR = 2
ERROR_CLIENT_ERROR = 3
ERROR_WRONG_METHOD = 4
ERROR_UNAUTHORIZED = 5

def process_error(request, error=ERROR_SERVER_ERROR, message=None):
    print request.META.get('HTTP_X_REQUESTED_WITH')
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
