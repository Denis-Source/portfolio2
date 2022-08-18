from rest_framework.generics import CreateAPIView
from .models import Message
from .serializers import MessageSerializer


class CreateMessageView(CreateAPIView):
    model = Message
    serializer_class = MessageSerializer
