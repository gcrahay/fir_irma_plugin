from django.conf import settings
from django.core.exceptions import ImproperlyConfigured
from django.utils.module_loading import import_string
from django.utils.six import callable as is_callable

def callable_settings(name, default_value):
    value = getattr(settings, name, default_value)
    if value is None:
        value = lambda *args, **kwargs: ""
    elif not is_callable(value):
        try:
            value = import_string(value)
        except ImportError:
            raise ImproperlyConfigured("'{0}' must be a string to a callable or a callable".format(name))
    setattr(settings, name, value)


def default_setting(name, default_value):
    value = getattr(settings, name, default_value)
    setattr(settings, name, value)


default_setting('IRMA_BASE_URL', 'http://127.0.0.1')
default_setting('IRMA_HAS_UI', True)
default_setting('IRMA_IS_STANDALONE', False)
default_setting('IRMA_REFRESH_MS', 3000)
default_setting('IRMA_SCAN_FIR_FILES', False)
default_setting('IRMA_SCAN_FIR_FILES_USER_FIELDS', ['opened_by', 'user', 'creator', 'created_by'])
default_setting('IRMA_ANONYMOUS_SCAN', False)
callable_settings('IRMA_SCAN_DESCRIPTION_CALLABLE', None)

