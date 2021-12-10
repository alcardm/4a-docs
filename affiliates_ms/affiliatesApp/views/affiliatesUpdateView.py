from rest_framework import status, views
from rest_framework.response import Response
from affiliatesApp.models.affiliates import Affiliates
from affiliatesApp.serializers.affiliatesSerializer import AffiliatesSerializer

class AffiliatesUpdateView(views.APIView):
    def post(self,request,pk):
        affiliates = Affiliates.objects.get(id=pk)
        serializer = AffiliatesSerializer(instance=affiliates, data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)