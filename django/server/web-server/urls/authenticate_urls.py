from django.urls import path
from .views import OrganizationRegisterView, TeacherRegisterView, StudentRegisterView

urlpatterns = [
    path('organization/submit', OrganizationRegisterView.as_view(), name='register_organization'),
    path('teacher/submit', TeacherRegisterView.as_view(), name='register_teacher'),
    path('student/submit', StudentRegisterView.as_view(), name='register_student'),
]
