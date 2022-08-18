from rest_framework.serializers import ModelSerializer
from .models import Header, Footer


class HeaderSerializer(ModelSerializer):
    class Meta:
        model = Header
        fields = ["info"]


class FooterSerializer(ModelSerializer):
    class Meta:
        model = Footer
        fields = ["info"]
