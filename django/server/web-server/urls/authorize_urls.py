from django.urls import path
from .views import LoginView

urlpatterns = [
    path('submit/', LoginView.as_view(), name='login'),
]
