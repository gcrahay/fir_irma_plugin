from django.conf import settings

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
