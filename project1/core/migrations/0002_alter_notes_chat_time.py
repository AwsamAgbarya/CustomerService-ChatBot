# Generated by Django 4.2 on 2023-04-13 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='chat_time',
            field=models.DateTimeField(blank=True, default='2023-04-13 16:45:17', null=True),
        ),
    ]
