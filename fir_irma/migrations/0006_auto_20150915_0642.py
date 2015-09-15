# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('fir_irma', '0005_irmascan_artifacts'),
    ]

    operations = [
        migrations.AddField(
            model_name='irmascan',
            name='client_ip',
            field=models.GenericIPAddressField(unpack_ipv4=True, blank=True, help_text='The IP address of the requesting user', null=True, verbose_name='Client IP address'),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='irmascan',
            name='comment',
            field=models.TextField(help_text='Additional data about the scan', null=True, verbose_name='Comment', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='irmascan',
            name='user',
            field=models.ForeignKey(blank=True, to=settings.AUTH_USER_MODEL, help_text='User who created this scan', null=True, verbose_name='user'),
            preserve_default=True,
        ),
    ]
