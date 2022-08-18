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