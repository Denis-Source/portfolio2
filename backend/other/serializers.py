from rest_framework.serializers import ModelSerializer
from .models import Header, Footer, SEO


class HeaderSerializer(ModelSerializer):
    class Meta:
        model = Header
        fields = ["info"]


class FooterSerializer(ModelSerializer):
    class Meta:
        model = Footer
        fields = ["info"]


class SEOSerializer(ModelSerializer):
    class Meta:
        model = SEO
        fields = ["title", "description", "share_image"]