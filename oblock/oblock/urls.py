from django.conf.urls import include, url
from django.contrib import admin
from django.views.decorators.csrf import csrf_exempt
from profiles import views
from profiles.views import custom_auth_token

urlpatterns = [
    url(r'^admin(/)?', include(admin.site.urls)),
    url(r'^profiles/custom-auth-token/$', csrf_exempt(custom_auth_token)),
    url(r'^profiles/create-profile', views.create_profile, name='profile'),
    url(r'^profiles/create-company-profile', views.create_company_profile, name='create_company_profile'),
    url(r'^profiles/make-transaction', views.make_transaction, name='make_transaction'),
    url(r'^profiles/fetch-profile-data', views.fetch_profile_data, name='fetch_profile_data'),
    url(r'^', include('profiles.urls', namespace='profiles'))
]
