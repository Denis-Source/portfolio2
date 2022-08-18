# Generated by Django 4.1 on 2022-08-17 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('message', '0003_alter_message_email_alter_message_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='body',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='message',
            name='phone',
            field=models.CharField(default='', max_length=12),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='message',
            name='subject',
            field=models.CharField(blank=True, max_length=120, null=True),
        ),
    ]