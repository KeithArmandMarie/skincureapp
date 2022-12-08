from django.shortcuts import render, HttpResponse,
from rest_framework.views import APIView
from rest_framework import permissions

# Create your views here.
class SetGuest(APIView):
    authentication_classes  = []
    permission_classes      = [permissions.AllowAny]

    def get(self, request, token, format=None):
        response                = HttpResponse("", status=308)
        response['Location']    = "http://localhost/index.html?redirect&action=confirm&status=success"
        response.set_cookie(key='guest_token', value=token, path='/', samesite='Lax', max_age=3600*24*7, secure=False, httponly=True)
        return response
    
class GuestGetKeys(APIView):
    authentication_classes  = []
    permission_classes      = [IsGuest]
    dec_list                = [ensure_csrf_cookie]

    @validate_guest
    def get(self, request, format=None):
        return Response({'status': 'valid', 'success': 'Guest is logged'}, status=status.HTTP_200_OK)