from django.contrib.auth.models import User
from django.db import models
from profiles.id_generator import generate_id


class Profile(models.Model):
    unique_id = models.IntegerField(null=True)
    user = models.OneToOneField(User, verbose_name=u'User')
    avatar = models.ImageField(u'Profile image', upload_to='upload/avatar_pic/', blank=True, null=True)
    first_name = models.CharField(u'Name', max_length=255)
    last_name = models.CharField(u'Surname', max_length=255)
    phone = models.CharField(u'Mobile phone', max_length=30, blank=True, null=True)
    created_at = models.DateTimeField(u'Profile was created: ', auto_now_add=True)

    def get_full_name(self):
        """
        Returns the first_name plus the last_name, with a space in between.
        """
        full_name = '%s %s' % (self.first_name, self.last_name)
        return full_name.strip()

    def generate_unique_id(self):
        return generate_id(1000000, self.__class__)

    def __str__(self):
        return self.first_name


class Company(models.Model):
    user = models.OneToOneField(User, verbose_name=u'User')
    name = models.CharField(u'Name', max_length=255)
    description = models.TextField()
    contacts = models.TextField()


class Wallet(models.Model):
    profile = models.OneToOneField(Profile)
    balance = models.FloatField()


class Transaction(models.Model):
    value = models.FloatField()
    wallet_from = models.ForeignKey(Wallet, related_name='wallet_from')
    wallet_to = models.ForeignKey(Wallet, related_name='wallet_to')
    timestamp = models.DateTimeField(u'Profile was created: ', auto_now_add=True)
