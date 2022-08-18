from rest_framework.generics import ListAPIView
from .models import Category, Project
from .serailizers import CategorySerializer, ProjectSerializer


class ListProjectView(ListAPIView):
    serializer_class = ProjectSerializer
    queryset = Project.objects.order_by("-priority")


class ListCategoryView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.order_by("-priority")
