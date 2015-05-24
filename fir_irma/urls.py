from django.conf.urls import include, url, patterns

from fir_irma.settings import settings

api_urlpatterns = patterns('',
    url(r'^$', 'fir_irma.views.not_found', name='base'),
    url(r'^scans$', 'fir_irma.views.irma_scan_new'),
    url(r'^scans/(?P<scan_id>[^/]+)/files$', 'fir_irma.views.irma_scan_upload'),
    url(r'^scans/(?P<scan_id>[^/]+)/launch$', 'fir_irma.views.irma_scan_launch'),
    url(r'^scans/(?P<scan_id>[^/]+)(?P<tail>(?:.*)?)$', 'fir_irma.views.irma_scan_generic'),
    url(r'^probes$', 'fir_irma.views.irma_probes'),
    url(r'^search/files', 'fir_irma.views.irma_search'),
)

common_urlpatterns = patterns('',
    url(r'^(?P<sub>selection|upload|search|maintenance|)$', 'fir_irma.views.irma_index', name='index'),
    url(r'^scan/(?P<scan_id>[a-zA-Z0-9\-]+)(?:/.*)?$', 'fir_irma.views.irma_redirect_index', name='details'),
    url(r'^views/(?P<name>maintenance|selection|search|details|scan|upload)\.html$', 'fir_irma.views.irma_view', name='view'),
    url(r'^js/irma.js$', 'fir_irma.views.irma_app', name='app'),
)

urlpatterns = patterns('',
    url(r'^api/v1/', include(api_urlpatterns, namespace='api')),
)

if settings.IRMA_HAS_UI:
    urlpatterns += patterns('',
        url(r'^', include(common_urlpatterns, namespace='ui')),
    )