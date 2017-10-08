import json
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from django.contrib.auth.models import User, Group


class UserSerializer(serializers.ModelSerializer):
    role = serializers.CharField()

    class Meta:
        model = User
        fields = ('username', 'email', 'role', 'password')

    def create(self, validated_data):
        username = validated_data.pop('username')
        email = validated_data.pop('email')
        password = validated_data.pop('password')
        user.save()


class CompanySerializer(serializers.ModelSerializer):
    id = serializers.CharField()
    group = serializers.CharField()
    email = serializers.CharField()
    specialization_id = serializers.CharField()
    education = serializers.CharField()
    hospitals = serializers.CharField()

    class Meta:
        model = DoctorProfile
        fields = ('id', 'group', 'firstname', 'lastname', 'middlename', 'email', 'bio', 'age', 'gender', 'phone_number',
                  'experience', 'specialization_id', 'education', 'hospitals')

    def create(self, validated_data):
        user_id = validated_data.pop('id')
        firstname = validated_data.pop('firstname')
        lastname = validated_data.pop('lastname')
        middlename = validated_data.pop('middlename')
        email = validated_data.pop('email')
        bio = validated_data.pop('bio')
        age = validated_data.pop('age')
        gender = validated_data.pop('gender')
        phone_number = validated_data.pop('phone_number')
        experience = validated_data.pop('experience')
        specialization_id = validated_data.pop('specialization_id')
        education = json.loads(validated_data.pop('education'))
        hospitals = validated_data.pop('hospitals')

        try:
            user = User.objects.get(pk=user_id)
            doctor_profile, created = DoctorProfile.objects.get_or_create(user_id=user_id,
                                                                          defaults={'firstname': firstname,
                                                                                    'lastname': lastname,
                                                                                    'middlename': middlename,
                                                                                    'bio': bio,
                                                                                    'age': age,
                                                                                    'gender': gender,
                                                                                    'phone_number': phone_number,
                                                                                    'experience': experience})
            if not created:
                doctor_profile.firstname = firstname
                doctor_profile.lastname = lastname
                doctor_profile.middlename = middlename
                doctor_profile.bio = bio
                doctor_profile.age = age
                doctor_profile.gender = gender
                doctor_profile.phone_number = phone_number
                doctor_profile.experience = experience

            doctor_profile.user.email = email
            doctor_profile.user.save()
            Education.objects.filter(doctor_profile=doctor_profile).delete()
            for entry in education:
                doctor_profile.education_set.create(name=entry['entity'],
                                                    date_from=entry['dateFrom'],
                                                    date_to=entry['dateTo'],
                                                    address=entry['address']
                )

            specialization = Specialization.objects.get(pk=specialization_id)
            doctor_profile.specialization = specialization

            user.doctor_profile = doctor_profile
            user.doctor_profile.save()

            doctor_profile.hospitals.clear()

            hospital_ids = [hospital['value'] for hospital in json.loads(hospitals)]
            hospitals = Hospital.objects.filter(pk__in=hospital_ids)

            for hospital in hospitals:
                doctor_profile.hospitals.add(hospital)
            user.doctor_profile.save()

        except ObjectDoesNotExist:
            pass