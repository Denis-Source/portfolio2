from django.urls import path
from .views import HeroRetrieveView, AboutRetrieveView, ContactRetrieveView, ProjectRetrieveView

urlpatterns = [
    path("hero", HeroRetrieveView.as_view()),
    path("about", AboutRetrieveView.as_view()),
    path("contact", ContactRetrieveView.as_view()),
    path("project", ProjectRetrieveView.as_view()),
]
