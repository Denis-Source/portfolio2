# Generated by Django 4.1 on 2022-08-17 10:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('description', models.CharField(max_length=120)),
                ('image', models.ImageField(upload_to='projects')),
                ('link', models.CharField(blank=True, max_length=240, null=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='project.category')),
            ],
        ),
    ]