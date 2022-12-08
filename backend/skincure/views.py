from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import Treatment, SkinDisease, Symptomp, Case
from .serializers import SkinDiseaseSerializer, TreatmentSerializers, SymptompSerializers, CaseSerializers
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
import json

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

class ProfileView(APIView):
    
    def get(self, request):
        if "profiles" not in request.session:
            request.session["profiles"] = []
        context = request.session["profiles"]
        print(request.method)
        return Response(context)
    
    def post(self, request):
        if "profiles" not in request.session:
            request.session["profiles"] = []
        profile = {
            "name": request.data["name"],
            "age": request.data["age"],
            "sex": request.data["sex"],
            "result": "acne",
            "accuracy": "93%",
        }
        request.session["profiles"] += [profile]
        print(request.session["profiles"])
        return Response(request.session["profiles"])

    def delete(self, request):
        request.session["profiles"] = [item for item in request.session["profiles"] if request.data['name'] != item.name]
        console.log("deleted")
        return Response(request.session["profiles"])

