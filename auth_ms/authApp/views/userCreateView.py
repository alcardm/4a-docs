from django.utils.functional import empty
from rest_framework import status, views
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from authApp.serializers.userSerializer import UserSerializer

class UserCreateView(views.APIView):

    def post(self, request, *args, **kwargs):
        try:
            request.data["key"]
        except(Exception):
            return Response({"Error": "Key Needed"},status=status.HTTP_401_UNAUTHORIZED)
        if(request.data["key"] != "EPS-PRUEBA"):
            return Response({"Error": "Bad Key"},status=status.HTTP_401_UNAUTHORIZED)
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        tokenData = {"username":request.data["username"], 
                     "password":request.data["password"]}
        tokenSerializer = TokenObtainPairSerializer(data=tokenData)
        tokenSerializer.is_valid(raise_exception=True)
                
        return Response(tokenSerializer.validated_data, status=status.HTTP_201_CREATED)