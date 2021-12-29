# Generated by Django 3.2.9 on 2021-12-29 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('facup', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='team',
            old_name='coords',
            new_name='latitude',
        ),
        migrations.AddField(
            model_name='team',
            name='longitude',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
