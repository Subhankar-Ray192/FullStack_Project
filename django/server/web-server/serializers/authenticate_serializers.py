from rest_framework import serializers
from .models import Organization, Teacher, Student

# Organization Serializer
class OrganizationRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ['uid', 'data', 'timestamp', 'org_name', 'org_email', 'org_password']
        extra_kwargs = {
            'org_password': {'write_only': True}
        }

    def create(self, validated_data):
        organization = Organization.objects.create(
            data=validated_data['data'],
            org_name=validated_data['org_name'],
            org_email=validated_data['org_email'],
            org_password=validated_data['org_password']
        )
        return organization

# Teacher Serializer
class TeacherRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['uid', 'data', 'timestamp', 'teacher_roll', 'teacher_name', 'teacher_email', 'teacher_password']
        extra_kwargs = {
            'teacher_password': {'write_only': True}
        }

    def create(self, validated_data):
        teacher = Teacher.objects.create(
            data=validated_data['data'],
            teacher_roll=validated_data['teacher_roll'],
            teacher_name=validated_data['teacher_name'],
            teacher_email=validated_data['teacher_email'],
            teacher_password=validated_data['teacher_password']
        )
        return teacher

# Student Serializer
class StudentRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['uid', 'data', 'timestamp', 'student_roll', 'student_name', 'student_email', 'student_password', 'student_department']
        extra_kwargs = {
            'student_password': {'write_only': True}
        }

    def create(self, validated_data):
        student = Student.objects.create(
            data=validated_data['data'],
            student_roll=validated_data['student_roll'],
            student_name=validated_data['student_name'],
            student_email=validated_data['student_email'],
            student_password=validated_data['student_password'],
            student_department=validated_data['student_department']
        )
        return student
