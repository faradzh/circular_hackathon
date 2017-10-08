from django.contrib.auth.models import User
from django.db.models import Q
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from profiles.models import Profile, Transaction
from rest_framework import viewsets, permissions, response


class Index(TemplateView):
    template_name = "index.html"


# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = (permissions.IsAuthenticated,)
#
#     def retrieve(self, request, pk=None, *args, **kwargs):
#         if pk == 'i':
#             serialised_user = UserSerializer(request.user, context={'request': request})
#             return response.Response(serialised_user.data)
#         return super(UserViewSet, self).retrieve(request, pk)


@csrf_exempt
def create_profile(request):
    if request.method == 'GET':
        username = request.GET.get('username')
        fullname = request.GET.get('fullname')
        email = request.GET.get('email')
        password = request.GET.get('password')
        password_confirm = request.GET.get('passwordConfirm')
        user = User.objects.create_user(username, email)
        user.set_password(password)
        user.save()
        return JsonResponse({"message": "ok"}, status=201)


@csrf_exempt
def fetch_profile_data(request):
    response_data = dict()
    if request.method == 'GET':
        user_id = request.GET.get('user_id')
        try:
            user_profile = Profile.objects.get(user_id=user_id)
            response_data["unique_id"] = user_profile.unique_id
            response_data["wallet_balance"] = user_profile.wallet.balance
            response_data["transactions"] = []
            transactions = Transaction.objects.filter(Q(wallet_to=user_profile.wallet) | Q(wallet_from=user_profile.wallet))
            for transaction in transactions:
                response_data["transactions"].append({
                    "id": transaction.id,
                    "timestamp": transaction.timestamp,
                    "wallet_from_owner_fullname": transaction.wallet_from.profile.first_name,
                    "wallet_to_owner_fullname": transaction.wallet_to.profile.last_name,
                    "value": transaction.value
                })
        except Profile.DoesNotExist:
            pass
    return JsonResponse({"message": "ok", "data": response_data}, status=201)

