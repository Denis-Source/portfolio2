from rest_framework.serializers import ModelSerializer
from .models import Category, Project


class CategorySerializer(ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class ProjectSerializer(ModelSerializer):
    categories = CategorySerializer(read_only=True, many=True)

    class Meta:
        model = Project
        fields = ["id", "name", "link", "github", "image_black", "image_white", "description", "categories"]
