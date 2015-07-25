from django.db import models
from django.utils.translation import ugettext_lazy as _

from fir_irma.settings import settings

try:
    User = settings.AUTH_USER_MODEL
except KeyError:
    from django.contrib.auth.models import User

try:
    from django.db.models import UUIDField
except ImportError:
    from uuidfield import UUIDField

try:
    from fir_plugins.models import link_to
    import fir_artifacts.models as artifacts_models
    File = artifacts_models.File
    Artifact = artifacts_models.Artifact
except ImportError:
    def link_to(linkable_model, link_name=None, verbose_name=None, verbose_name_plural=None):
        def model_linker(cls):
            return cls
        return model_linker
    class File:
        _fake = True
    class Artifact:
        _fake = True


@link_to(File)
@link_to(Artifact)
class IrmaScan(models.Model):
    irma_scan = UUIDField(verbose_name=_("scan ID"), help_text=_("Internal ID in IRMA"))
    user = models.ForeignKey(User, verbose_name=_("user"), help_text=_("User who created this scan"),
                             null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True, verbose_name=_("creation date"))
    probes = models.CharField(max_length=200, null=True, blank=True, verbose_name=_("probes"),
                              help_text=_("Probes used by this scan"))
    force = models.BooleanField(default=False, verbose_name=_("force scan"), help_text=_("Bypass the cache"))
    client_ip = models.GenericIPAddressField(verbose_name=_("Client IP address"), unpack_ipv4=True,
                                             null=True, blank=True, help_text=_("The IP address of the requesting user"))

    def __unicode__(self):
        return _(u"Scan launched on {date} by {user}").format(date=self.date, user=self.user)

    class Meta:
        verbose_name = _("IRMA scan")
        verbose_name_plural = _("IRMA scans")
        permissions = (
            ('scan_files', _('Scan files')),
            ('read_all_results', _('Read all scan results')),
            ('can_force_scan', _('Can force scan')),
        )

    def get_absolute_url(self):
        from django.core.urlresolvers import reverse
        from uuid import UUID
        return reverse('fir_irma:ui:details', args=[str(UUID(str(self.irma_scan)))])


if settings.IRMA_SCAN_FIR_FILES and not hasattr(File, '_fake'):
    from django.db.models.signals import post_save
    from fir_irma.utils import fir_files_postsave
    post_save.connect(fir_files_postsave, sender=File, dispatch_uid='fir_irma_file_scan')