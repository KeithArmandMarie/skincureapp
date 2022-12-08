from django.urls import path
from .views import SkinDiseaseRetrieveViewSet, SkinDiseaseViewSet, TreatmentViewSet, TreatmentRetrieveViewSet, SymptompViewSet,SymptompRetrieveViewSet, CaseViewSet, CaseRetrieveViewSet
urlpatterns = [
path('treatment/', TreatmentViewSet.as_view(), name = 'treatment'),
path('treatment/<int:id>', TreatmentRetrieveViewSet.as_view(), name = 'treatment-retrieve'),
path('skindisease/', SkinDiseaseViewSet.as_view(), name = 'skindisease'),
path('skindisease/<int:id>', SkinDiseaseRetrieveViewSet.as_view(), name = 'skindisease-retrieve'),
path('symptomp/', SymptompViewSet.as_view(), name = 'symptomp'),
path('symptomp/<int:id>', SymptompRetrieveViewSet.as_view(), name = 'symptomp-retrieve'),
path('case/', CaseViewSet.as_view(), name = 'case'),
path('case/<int:id>', CaseRetrieveViewSet.as_view(), name = 'case-retrieve'),
]
