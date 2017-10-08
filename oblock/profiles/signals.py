from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from profiles.id_generator import generate_id
from profiles.models import Profile, Wallet


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        generated_id = generate_id(1000000, Profile)
        profile = Profile.objects.create(user=instance, unique_id=generated_id)
        Wallet.objects.create(profile=profile, balance=0.0)


@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()