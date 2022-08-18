from django.urls import path
from .views import ListProjectView, ListCategoryView

urlpatterns = [
    path("", ListProjectView.as_view()),
    path("category", ListCategoryView.as_view())
]
