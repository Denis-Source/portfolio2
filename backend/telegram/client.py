from threading import Thread

import requests
from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save

from message.models import Message


class Client:
    TELEGRAM_URL = "https://api.telegram.org"

    @staticmethod
    def send_message(message: Message):
        url = f"{Client.TELEGRAM_URL}" \
              f"/bot" \
              f"{settings.BOT_TOKEN}" \
              f"/sendMessage"

        text = f"{message.subject}\n\n" \
               f"{message.name}\n<{message.email}>\n\n" \
               f"{message.body}"

        data = {"chat_id": settings.BOT_REC_ID,
                "text": text}

        requests.post(url=url, data=data)

    @staticmethod
    @receiver(post_save, sender=Message)
    def intercept(sender, instance: Message, **kwargs):
        Thread(target=Client.send_message, args=(instance,)).start()
