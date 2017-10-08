# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_auto_20171008_0113'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='unique_id',
            field=models.IntegerField(null=True),
        ),
    ]
