# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings

try:
    from django.db.models import UUIDField
except ImportError:
    from uuidfield import UUIDField

class Migration(migrations.Migration):

    dependencies = [
        ('fir_irma', '0003_auto_20150524_0832'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='irmascan',
            options={'verbose_name': 'IRMA scan', 'verbose_name_plural': 'IRMA scans',
                     'permissions': (('scan_files', 'Scan files'), ('read_all_results', 'Read all scan results'),
                                     ('can_force_scan', 'Can force scan'))},
        ),
        migrations.AlterField(
            model_name='irmascan',
            name='date',
            field=models.DateTimeField(auto_now_add=True, verbose_name='creation date'),
        ),
        migrations.AlterField(
            model_name='irmascan',
            name='force',
            field=models.BooleanField(default=False, help_text='Bypass the cache', verbose_name='force scan'),
        ),
        migrations.AlterField(
            model_name='irmascan',
            name='irma_scan',
            field=UUIDField(help_text='Internal ID in IRMA', verbose_name='scan ID'),
        ),
        migrations.AlterField(
            model_name='irmascan',
            name='probes',
            field=models.CharField(help_text='Probes used by this scan', max_length=200, null=True,
                                   verbose_name='probes', blank=True),
        ),
        migrations.AlterField(
            model_name='irmascan',
            name='user',
            field=models.ForeignKey(verbose_name='user', to=settings.AUTH_USER_MODEL,
                                    help_text='User who created this scan'),
        ),
    ]
