from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Hero, About, Contact, Project
from .serializers import HeroSerializer, AboutSerializer, ContactSerializer, ProjectSerializer


class SingletonRetrieveView(APIView):
    model = None
    serializer_class = None

    def get_object(self):
        return self.model.get_solo()

    def get(self, request):
        obj = self.get_object()
        serializer = self.serializer_class(obj)
        return Response(serializer.data)


class HeroRetrieveView(SingletonRetrieveView):
    model = Hero
    serializer_class = HeroSerializer


class AboutRetrieveView(SingletonRetrieveView):
    model = About
    serializer_class = AboutSerializer


class ContactRetrieveView(SingletonRetrieveView):
    model = Contact
    serializer_class = ContactSerializer


class ProjectRetrieveView(SingletonRetrieveView):
    model = Project
    serializer_class = ProjectSerializer
