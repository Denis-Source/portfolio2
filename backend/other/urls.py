from django.urls import path
from .views import HeaderRetrieveView, FooterRetrieveView

urlpatterns = [
    path("header", HeaderRetrieveView.as_view()),
    path("footer", FooterRetrieveView.as_view()),
]
