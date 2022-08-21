from django.db import models
from solo.models import SingletonModel
from tinymce.models import HTMLField


class Hero(SingletonModel):
    name = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    subtitle = models.CharField(max_length=120)
    button = models.CharField(max_length=120)
    background = models.ImageField(upload_to="background")

    def __str__(self):
        return self.title


class AboutTab(models.Model):
    name = models.CharField(max_length=120)
    icon_black = models.ImageField(upload_to="about-icons")
    icon_white = models.ImageField(upload_to="about-icons")
    image_black = models.ImageField(upload_to="about-images")
    image_white = models.ImageField(upload_to="about-images")
    body = HTMLField()

    def __str__(self):
        return self.name


class About(SingletonModel):
    name = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    subtitle = models.CharField(max_length=120)
    tabs = models.ManyToManyField(AboutTab)

    def __str__(self):
        return self.title


class ContactCard(models.Model):
    title = models.CharField(max_length=120)
    link = models.CharField(max_length=240)
    icon_white = models.ImageField(upload_to="contact-icons")
    icon_black = models.ImageField(upload_to="contact-icons")
    body = models.CharField(max_length=120)

    def __str__(self):
        return self.title


class Contact(SingletonModel):
    name = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    subtitle = models.CharField(max_length=120)
    cards = models.ManyToManyField(ContactCard)

    def __str__(self):
        return self.title


class Project(SingletonModel):
    name = models.CharField(max_length=120)
    title = models.CharField(max_length=120)
    subtitle = models.CharField(max_length=120)

    def __str__(self):
        return self.title
