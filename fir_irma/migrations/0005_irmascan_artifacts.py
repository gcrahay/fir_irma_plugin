# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations

try:
    import fir_artifacts
    ops = [
        migrations.AddField(
            model_name='irmascan',
            name='artifacts',
            field=models.ManyToManyField(related_name='irmascans', to='fir_artifacts.Artifact'),
            preserve_default=True,
        ),
    ]
    deps = [
        ('fir_artifacts', '0002_create_artifacts'),
        ('fir_irma', '0004_auto_20150524_0842'),
    ]
except ImportError:
    ops = []
    deps = [
        ('fir_irma', '0004_auto_20150524_0842'),
    ]


class Migration(migrations.Migration):

    dependencies = deps

    operations = ops
