# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('name', models.CharField(verbose_name='Name', max_length=255)),
                ('description', models.TextField()),
                ('contacts', models.TextField()),
                ('user', models.OneToOneField(verbose_name='User', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', primary_key=True, auto_created=True)),
                ('avatar', models.ImageField(null=True, verbose_name='Profile image', blank=True, upload_to='upload/avatar_pic/')),
                ('first_name', models.CharField(verbose_name='Name', max_length=255)),
                ('last_name', models.CharField(verbose_name='Surname', max_length=255)),
                ('phone', models.CharField(null=True, verbose_name='Mobile phone', blank=True, max_length=30)),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Profile was created: ')),
                ('user', models.OneToOneField(verbose_name='User', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
