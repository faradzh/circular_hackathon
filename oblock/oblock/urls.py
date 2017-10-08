from django.conf.urls import include, url
from django.contrib import admin
from profiles import views

urlpatterns = [
    url(r'^admin(/)?', include(admin.site.urls)),
    url(r'^profiles/create-profile', views.create_profile, name='profile'),
    url(r'^profiles/create-company-profile', views.create_company_profile, name='create_company_profile'),
    url(r'^profiles/make-transaction', views.make_transaction, name='make_transaction'),
    url(r'^profiles/fetch-profile-data', views.fetch_profile_data, name='fetch_profile_data'),
    url(r'^', include('profiles.urls', namespace='profiles'))
]
