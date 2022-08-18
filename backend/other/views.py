from homepage.views import SingletonRetrieveView
from .models import Header, Footer
from .serializers import HeaderSerializer, FooterSerializer


class HeaderRetrieveView(SingletonRetrieveView):
    model = Header
    serializer_class = HeaderSerializer


class FooterRetrieveView(SingletonRetrieveView):
    model = Footer
    serializer_class = FooterSerializer
