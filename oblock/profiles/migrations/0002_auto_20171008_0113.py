# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Transaction',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('value', models.FloatField()),
                ('timestamp', models.DateTimeField(auto_now_add=True, verbose_name='Profile was created: ')),
            ],
        ),
        migrations.CreateModel(
            name='Wallet',
            fields=[
                ('id', models.AutoField(primary_key=True, verbose_name='ID', auto_created=True, serialize=False)),
                ('balance', models.FloatField()),
                ('profile', models.OneToOneField(to='profiles.Profile')),
            ],
        ),
        migrations.AddField(
            model_name='transaction',
            name='wallet_from',
            field=models.ForeignKey(to='profiles.Wallet', related_name='wallet_from'),
        ),
        migrations.AddField(
            model_name='transaction',
            name='wallet_to',
            field=models.ForeignKey(to='profiles.Wallet', related_name='wallet_to'),
        ),
    ]
