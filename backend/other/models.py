from solo.models import SingletonModel
from tinymce.models import HTMLField
from django.db import models


class Footer(SingletonModel):
    info = HTMLField()

    def __str__(self):
        return self.info


class Header(SingletonModel):
    info = models.CharField(max_length=120)

    def __str__(self):
        return self.info


class SEO(SingletonModel):
    title = models.CharField(max_length=120)
    description = models.TextField()
    share_image = models.ImageField(upload_to="seo_share")

    def __str__(self):
        return self.title
