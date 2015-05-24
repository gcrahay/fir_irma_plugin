from django.conf import settings

def default_setting(name, default_value):
    value = getattr(settings, name, default_value)
    setattr(settings, name, value)


default_setting('IRMA_BASE_URL', 'http://127.0.0.1:/api/v1')
default_setting('IRMA_HAS_UI', True)
default_setting('IRMA_IS_STANDALONE', False)
default_setting('IRMA_REFRESH_MS', 3000)

