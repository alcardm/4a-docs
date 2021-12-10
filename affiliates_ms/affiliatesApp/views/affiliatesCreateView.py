from rest_framework import status, views
from rest_framework.response import Response

from affiliatesApp.models.affiliates import Affiliates
from affiliatesApp.serializers.affiliatesSerializer import AffiliatesSerializer


class AffiliatesCreateView(views.APIView):

    def post(self, request):
        serializer = AffiliatesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)


    