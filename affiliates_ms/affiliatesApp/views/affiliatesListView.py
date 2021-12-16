from rest_framework import status, views
from rest_framework import response
from rest_framework.response import Response

from affiliatesApp.models.affiliates import Affiliates
from affiliatesApp.serializers.affiliatesSerializer import AffiliatesSerializer

class AffiliatesListView(views.APIView):
    def get(self, request):
        affiliates = Affiliates.objects.all()
        serializer = AffiliatesSerializer(affiliates, many = True)
        return Response(serializer.data)