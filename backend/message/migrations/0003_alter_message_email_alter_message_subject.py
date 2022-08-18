# Generated by Django 4.1 on 2022-08-16 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('message', '0002_alter_message_email_alter_message_subject'),
    ]

    operations = [
        migrations.AlterField(
            model_name='message',
            name='email',
            field=models.EmailField(default='', max_length=254),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='message',
            name='subject',
            field=models.CharField(default='', max_length=120),
            preserve_default=False,
        ),
    ]
