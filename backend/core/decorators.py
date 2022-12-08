from django.shortcuts import redirect
from .models import Guest
import logging

logger = logging.getLogger(__name__)

def validate_guest(view_func):
    def wrapper(self, request, *args, **kwargs):
        try: 
            token           = request.COOKIES.get('guest_token')
            request.guest   = Guest.objects.get(token=token)
        except Exception as e:
            logger.debug(str(e))            
            return redirect('/api/')

        return view_func(self, request, *args, **kwargs)

    return wrapper