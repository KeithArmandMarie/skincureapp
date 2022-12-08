from rest_framework import serializers
from .models import Treatment, SkinDisease, Symptomp, Case

class TreatmentSerializers(serializers.ModelSerializer):
    class Meta:
        model = Treatment
        fields = ['name','id','description']
        
class SkinDiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SkinDisease
        fields = ['name','id','description']

class SymptompSerializers(serializers.ModelSerializer):
    class Meta:
        model = Symptomp
        fields = ['name','id','description']       

class CaseSerializers(serializers.ModelSerializer):
    class Meta:
        model = Case
        fields = ['name','id','description']