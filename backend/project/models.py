from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=120)
    priority = models.IntegerField(default=100)

    def __str__(self):
        return self.name


class Project(models.Model):
    name = models.CharField(max_length=120)
    priority = models.IntegerField(default=100)
    description = models.CharField(max_length=120)
    categories = models.ManyToManyField(Category)
    image_black = models.ImageField(upload_to="projects")
    image_white = models.ImageField(upload_to="projects")
    link = models.CharField(max_length=240, blank=True, null=True)
    github = models.CharField(max_length=240, blank=True, null=True)

    def __str__(self):
        return self.name

