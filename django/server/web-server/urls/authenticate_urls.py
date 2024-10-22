from django.urls import path
from .views import OrganizationRegisterView, TeacherRegisterView, StudentRegisterView

urlpatterns = [
    path('organization/', OrganizationRegisterView.as_view(), name='register_organization'),
    path('teacher/', TeacherRegisterView.as_view(), name='register_teacher'),
    path('student/', StudentRegisterView.as_view(), name='register_student'),
]
