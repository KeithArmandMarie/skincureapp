from django.db import models

# Create your models here.
class SkinDisease(models.Model):
    name = models.CharField(max_length = 255, blank = True, null = True)
    description = models.TextField(max_length = 10000, blank = True, null = True)
    image = models.ImageField()
    
class Treatment(models.Model):
    name = models.CharField(max_length = 255, blank = True, null = True)
    description = models.TextField(max_length = 10000, blank = True, null= True)

class Symptomp(models.Model):
    name = models.CharField(max_length = 255, blank = True, null = True)
    description = models.TextField(max_length = 10000, blank = True, null= True)

class Case(models.Model):
    name = models.CharField(max_length = 255, blank = True, null = True)
    description = models.TextField(max_length = 10000, blank = True, null= True)
    image = models.ImageField()