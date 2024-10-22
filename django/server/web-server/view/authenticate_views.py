from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import OrganizationRegisterSerializer, TeacherRegisterSerializer, StudentRegisterSerializer

# Organization Registration View
class OrganizationRegisterView(APIView):
    def post(self, request):
        serializer = OrganizationRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Organization registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Teacher Registration View
class TeacherRegisterView(APIView):
    def post(self, request):
        serializer = TeacherRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Teacher registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Student Registration View
class StudentRegisterView(APIView):
    def post(self, request):
        serializer = StudentRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Student registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

