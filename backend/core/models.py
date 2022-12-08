import binascii
import os
import uuid
from django.utils import timezone
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    id = models.UUIDField(primary_key=True, unique=True,default=uuid.uuid4, editable = False)
    
class Guest(models.Model):
    token = models.CharField(max_length=40, primary_key=True)
    created = models.DateTimeField(default=timezone.now)
    
    class Meta:
        ordering = ['created']
        verbose_name = 'Guest'
        verbose_name_plural = 'Guests'

    def save(self, *args, **kwargs):
        if not self.token:
            self.token = self.generate_key()
        return super().save(*args, **kwargs)

    def generate_key(self):
        return binascii.hexlify(os.urandom(20)).decode()

    def __str__(self):
        return self.token