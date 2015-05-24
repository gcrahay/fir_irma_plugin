# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fir_irma', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='irmascan',
            options={'permissions': (('scan_files', 'Scan files'), ('read_all_results', 'Read all scan results'))},
        ),
    ]
