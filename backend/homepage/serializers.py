from rest_framework.serializers import ModelSerializer
from .models import Hero, AboutTab, About, ContactCard, Contact, Project


class HeroSerializer(ModelSerializer):
    class Meta:
        model = Hero
        fields = ["name", "title", "subtitle", "button", "background"]


class AboutTabSerializer(ModelSerializer):
    class Meta:
        model = AboutTab
        fields = ["name", "icon", "image", "body"]


class AboutSerializer(ModelSerializer):
    tabs = AboutTabSerializer(read_only=True, many=True)

    class Meta:
        model = About
        fields = ["name", "title", "subtitle", "tabs"]


class ContactCardSerializer(ModelSerializer):
    class Meta:
        model = ContactCard
        fields = ["title", "link", "icon", "body"]


class ContactSerializer(ModelSerializer):
    cards = ContactCardSerializer(read_only=True, many=True)

    class Meta:
        model = Contact
        fields = ["name", "title", "subtitle", "cards"]


class ProjectSerializer(ModelSerializer):
    class Meta:
        model = Project
        fields = ["name", "title", "subtitle"]
