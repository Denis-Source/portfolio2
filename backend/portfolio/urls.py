from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from django.contrib import admin

from homepage.urls import urlpatterns as homepage_urlpatterns
from message.urls import urlpatterns as message_urlpatterns
from project.urls import urlpatterns as project_urlpatterns
from other.urls import urlpatterns as other_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    path('homepage/', include(homepage_urlpatterns)),
    path('message/', include(message_urlpatterns)),
    path('project/', include(project_urlpatterns)),
    path('', include(other_urlpatterns)),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
