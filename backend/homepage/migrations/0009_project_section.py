# Generated by Django 4.1 on 2022-08-18 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0008_about_section_abouttab_section_contact_section_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='section',
            field=models.CharField(default='', max_length=120),
            preserve_default=False,
        ),
    ]
