from affiliatesApp.models.affiliates import Affiliates
from rest_framework import serializers


class AffiliatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Affiliates
        fields = "__all__"
    