# Generated by Django 4.1 on 2022-08-18 16:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0009_project_section'),
    ]

    operations = [
        migrations.RenameField(
            model_name='about',
            old_name='section',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='contact',
            old_name='section',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='hero',
            old_name='section',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='project',
            old_name='section',
            new_name='name',
        ),
        migrations.RemoveField(
            model_name='abouttab',
            name='section',
        ),
    ]
