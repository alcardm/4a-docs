from rest_framework import status, views
from rest_framework.response import Response
from affiliatesApp.models.affiliates import Affiliates
from affiliatesApp.serializers.affiliatesSerializer import AffiliatesSerializer

class AffiliatesDeleteView(views.APIView):
    def get(self, request, pk):
        affiliates = Affiliates.objects.get(id=pk)
        affiliates_instance = Affiliates.objects.get(id=pk)
        affiliates_instance.delete()
        return Response('Deleted')