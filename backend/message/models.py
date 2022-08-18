from django.db import models


class Message(models.Model):
    date = models.DateField(auto_now=True)
    email = models.EmailField()
    name = models.CharField(max_length=120)
    subject = models.CharField(max_length=120, blank=True, null=True)
    body = models.TextField()

    def __str__(self):
        return self.body
