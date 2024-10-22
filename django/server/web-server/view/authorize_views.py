from django.http import HttpResponse
from django.contrib.auth.hashers import check_password
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from authenticate.models import Organization, Teacher, Student
from django.views.decorators.csrf import csrf_exempt

class LoginView(APIView):
    @csrf_exempt
    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        # Check in Organization model
        try:
            org = Organization.objects.get(org_email=email)
            if check_password(password, org.org_password):
                return HttpResponse("<p>Hello World</p>")
        except Organization.DoesNotExist:
            pass

        # Check in Teacher model
        try:
            teacher = Teacher.objects.get(teacher_email=email)
            if check_password(password, teacher.teacher_password):
                return HttpResponse("<p>Hello World</p>")
        except Teacher.DoesNotExist:
            pass

        # Check in Student model
        try:
            student = Student.objects.get(student_email=email)
            if check_password(password, student.student_password):
                return HttpResponse("<p>Hello World</p>")
        except Student.DoesNotExist:
            pass

        return Response({"message": "Invalid email or password"}, status=status.HTTP_401_UNAUTHORIZED)

    def get(self, request):
        return Response({"message": "Only POST requests are allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

