# Generated by Django 4.1 on 2022-08-18 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0007_project'),
    ]

    operations = [
        migrations.AddField(
            model_name='about',
            name='section',
            field=models.CharField(default='', max_length=120),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='abouttab',
            name='section',
            field=models.CharField(default='', max_length=120),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='contact',
            name='section',
            field=models.CharField(default='', max_length=120),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='hero',
            name='section',
            field=models.CharField(default='', max_length=120),
            preserve_default=False,
        ),
    ]
