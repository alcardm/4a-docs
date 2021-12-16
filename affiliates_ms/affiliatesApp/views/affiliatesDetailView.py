from rest_framework import status, views
from rest_framework.response import Response
from affiliatesApp.models.affiliates import Affiliates
from affiliatesApp.serializers.affiliatesSerializer import AffiliatesSerializer

class AffiliatesDetailView(views.APIView):
    def get(self,request,pk):
        try:
            affiliates = Affiliates.objects.get(document_number=pk)
            serializer = AffiliatesSerializer(affiliates, many=False)
            return Response(serializer.data)
        except Exception:
            return Response({"data": False})