from django.urls import path
from .views import HeaderRetrieveView, FooterRetrieveView, SEORetrieveView

urlpatterns = [
    path("header", HeaderRetrieveView.as_view()),
    path("footer", FooterRetrieveView.as_view()),
    path("seo", SEORetrieveView.as_view())
]
