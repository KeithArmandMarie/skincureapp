from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Treatment, SkinDisease, Symptomp, Case
from .serializers import SkinDiseaseSerializer, TreatmentSerializers, SymptompSerializers, CaseSerializers
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
# Create your views here.

class TreatmentViewSet(ListCreateAPIView):
    queryset = Treatment.objects.all()
    serializer_class = TreatmentSerializers
    
class TreatmentRetrieveViewSet(RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    queryset = Treatment.objects.all()
    serializer_class = TreatmentSerializers
    
class SkinDiseaseViewSet(ListCreateAPIView):
    queryset = SkinDisease.objects.all()
    serializer_class = SkinDiseaseSerializer
    
class SkinDiseaseRetrieveViewSet(RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    queryset = SkinDisease.objects.all()
    serializer_class = SkinDiseaseSerializer
    
class SymptompViewSet(ListCreateAPIView):
    queryset = Symptomp.objects.all()
    serializer_class = SymptompSerializers
    
class SymptompRetrieveViewSet(RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    queryset = Symptomp.objects.all()
    serializer_class = SymptompSerializers
    
class CaseViewSet(ListCreateAPIView):
    queryset = Case.objects.all()
    serializer_class = CaseSerializers
    
class CaseRetrieveViewSet(RetrieveUpdateDestroyAPIView):
    lookup_field = 'id'
    queryset = Case.objects.all()
    serializer_class = CaseSerializers