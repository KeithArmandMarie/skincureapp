from django.contrib import admin
from skincure.models import SkinDisease, Treatment, Symptomp, Case
# Register your models here.
@admin.register(SkinDisease)
class SkinDiseaseAdmin(admin.ModelAdmin):
    list_display = ['name']
@admin.register(Treatment)
class TreatmentAdmin(admin.ModelAdmin):
    list_display = ['name']
@admin.register(Symptomp)
class SymptompAdmin(admin.ModelAdmin):
    list_display = ['name']
@admin.register(Case)
class CaseAdmin(admin.ModelAdmin):
    list_display = ['name']