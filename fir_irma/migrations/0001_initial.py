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
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='IrmaScan',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('irma_scan', UUIDField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('probes', models.CharField(max_length=200, null=True, blank=True)),
                ('force', models.BooleanField(default=False)),
                ('user', models.ForeignKey(to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
