# Generated by Django 4.1.8 on 2023-04-18 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_notes_chat_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notes',
            name='chat_time',
            field=models.DateTimeField(blank=True, default='2023-04-18 16:22:46', null=True),
        ),
    ]