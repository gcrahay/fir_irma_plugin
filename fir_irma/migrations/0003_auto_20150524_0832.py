# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fir_irma', '0002_auto_20150523_1833'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='irmascan',
            options={'permissions': (('scan_files', 'Scan files'), ('read_all_results', 'Read all scan results'), ('can_force_scan', 'Can force scan'))},
        ),
    ]
