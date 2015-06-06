from functools import wraps
from uuid import UUID

from django.conf import settings
from django.contrib.auth import REDIRECT_FIELD_NAME
from django.utils.decorators import available_attrs
from django.utils.six.moves.urllib.parse import urlparse
from django.shortcuts import resolve_url, redirect

from fir_irma.models import IrmaScan
from fir_irma.utils import process_error, ERROR_NOT_FOUND, ERROR_UNAUTHORIZED


def user_is_owner_or_privileged(login_url=None, redirect_field_name=REDIRECT_FIELD_NAME):
    """
    Decorator for views that checks that the user is the owner of the scan or privileged,,
    redirecting to the log-in page if necessary. The request must have a scan_id parameter.
    """

    def decorator(view_func):
        @wraps(view_func, assigned=available_attrs(view_func))
        def _wrapped_view(request, *args, **kwargs):
            if request.user.is_authenticated():
                if 'scan_id' in kwargs:
                    scan_id = UUID(kwargs.get('scan_id'))
                    try:
                        scan = IrmaScan.objects.get(irma_scan=scan_id)
                    except IrmaScan.DoesNotExist:
                        return process_error(request, error=ERROR_NOT_FOUND)
                    if (request.user == scan.user and request.user.has_perm('fir_irma.scan_files')) or \
                            request.user.has_perm('fir_irma.read_all_results'):
                        kwargs['scan'] = scan
                        return view_func(request, *args, **kwargs)
            path = request.build_absolute_uri()
            resolved_login_url = resolve_url(login_url or settings.LOGIN_URL)
            # If the login url is the same scheme and net location then just
            # use the path as the "next" url.
            login_scheme, login_netloc = urlparse(resolved_login_url)[:2]
            current_scheme, current_netloc = urlparse(path)[:2]
            if ((not login_scheme or login_scheme == current_scheme) and
                    (not login_netloc or login_netloc == current_netloc)):
                path = request.get_full_path()
            from django.contrib.auth.views import redirect_to_login
            return redirect_to_login(
                path, resolved_login_url, redirect_field_name)
        _wrapped_view.csrf_exempt = True
        return _wrapped_view
    return decorator

def login_and_perm_required(perm, login_url=None, unprivileged_url=None,redirect_field_name=REDIRECT_FIELD_NAME):
    """
    Decorator for views that checks that the user is authenticated and has permission,
    redirecting to the log-in page if necessary.
    """

    def decorator(view_func):
        @wraps(view_func, assigned=available_attrs(view_func))
        def _wrapped_view(request, *args, **kwargs):
            if request.user.is_authenticated():
                if not isinstance(perm, (list, tuple)):
                    perms = (perm, )
                else:
                    perms = perm
                if request.user.has_perms(perms):
                    return view_func(request, *args, **kwargs)
                if unprivileged_url is not None:
                    return redirect(unprivileged_url)
                return process_error(request, error=ERROR_UNAUTHORIZED)
            else:
                path = request.build_absolute_uri()
                resolved_login_url = resolve_url(login_url or settings.LOGIN_URL)
                # If the login url is the same scheme and net location then just
                # use the path as the "next" url.
                login_scheme, login_netloc = urlparse(resolved_login_url)[:2]
                current_scheme, current_netloc = urlparse(path)[:2]
                if ((not login_scheme or login_scheme == current_scheme) and
                        (not login_netloc or login_netloc == current_netloc)):
                    path = request.get_full_path()
                from django.contrib.auth.views import redirect_to_login
                return redirect_to_login(
                    path, resolved_login_url, redirect_field_name)
        _wrapped_view.csrf_exempt = True
        return _wrapped_view
    return decorator
