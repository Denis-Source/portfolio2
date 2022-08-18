from django.contrib import admin
from .models import Hero, AboutTab, About, ContactCard, Contact, Project

for model in [Hero, AboutTab, About, ContactCard, Contact, Project]:
    admin.site.register(model)
