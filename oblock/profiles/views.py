from django.contrib.auth.models import User
from django.db.models import Q
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import TemplateView
from profiles.models import Profile, Transaction
from profiles.serializers import UserSerializer
from rest_framework import viewsets, permissions, response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response


class Index(TemplateView):
    template_name = "index.html"


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def retrieve(self, request, pk=None, *args, **kwargs):
        if pk == 'i':
            serialised_user = UserSerializer(request.user, context={'request': request})
            return response.Response(serialised_user.data)
        return super(UserViewSet, self).retrieve(request, pk)


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'id': user.id,
            'token': token.key
        })


custom_auth_token = CustomAuthToken.as_view()


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
def create_company_profile(request):
    if request.method == 'GET':
        username = request.GET.get('username')
        # fullname = request.GET.get('fullname')
        email = request.GET.get('email')
        # phone = request.GET.get('phone')
        # contacts = request.GET.get('contacts')
        password = request.GET.get('password')
        password_confirm = request.GET.get('passwordConfirm')
        user = User.objects.create_user(username, email)
        user.set_password(password)
        user.save()
        # user.profile.create(fullname=fullname, phone=phone, contacts=contacts)
        # user.profile.save()
        return JsonResponse({"message": "ok"}, status=201)


@csrf_exempt
def make_transaction(request):
    response_data = dict()
    if request.method == 'GET':
        user_id = request.GET.get('user_id')
        transaction_unique_id = request.GET.get('transaction_unique_id')
        transaction_amount = request.GET.get('transaction_amount')
        try:
            profile = Profile.objects.get(user_id=user_id)
            transer_from_wallet = profile.wallet
            transfer_to_profile = Profile.objects.get(unique_id=transaction_unique_id)
            transfer_to_wallet = transfer_to_profile.wallet
            transer_from_wallet.balance -= float(transaction_amount)
            transfer_to_wallet.balance += float(transaction_amount)
            transer_from_wallet.save()
            transfer_to_wallet.save()

            Transaction.objects.create(wallet_from=transer_from_wallet, wallet_to=transfer_to_wallet, value=transaction_amount)
        except Profile.DoesNotExist:
            pass
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
                    "wallet_from_owner_fullname": transaction.wallet_from.profile.user.username,
                    "wallet_to_owner_fullname": transaction.wallet_to.profile.user.username,
                    "value": transaction.value
                })
        except Profile.DoesNotExist:
            pass
    return JsonResponse({"message": "ok", "data": response_data}, status=201)

