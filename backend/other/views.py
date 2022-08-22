from homepage.views import SingletonRetrieveView
from .models import Header, Footer, SEO
from .serializers import HeaderSerializer, FooterSerializer, SEOSerializer


class HeaderRetrieveView(SingletonRetrieveView):
    model = Header
    serializer_class = HeaderSerializer


class FooterRetrieveView(SingletonRetrieveView):
    model = Footer
    serializer_class = FooterSerializer


class SEORetrieveView(SingletonRetrieveView):
    model = SEO
    serializer_class = SEOSerializer
