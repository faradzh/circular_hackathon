from django.conf.urls import url
from profiles.views import Index

urlpatterns = [
    url(r'^', Index.as_view(), name='index')
]