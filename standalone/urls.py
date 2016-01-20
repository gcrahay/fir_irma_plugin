from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    url(r'^', include('fir_irma.urls', namespace='irma')),
    url(r'^login/$', 'django.contrib.auth.views.login', {'template_name': 'fir_irma/standalone/login.html'}),
    url(r'^logout/$', 'django.contrib.auth.views.logout', {'next_page': '/'}),
    url('^', include('django.contrib.auth.urls')),
    url(r'^admin/', include(admin.site.urls)),
]
