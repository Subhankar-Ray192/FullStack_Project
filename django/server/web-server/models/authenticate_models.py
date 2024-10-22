from django.db import models
from django.contrib.auth.hashers import make_password

# Organization Model
class Organization(models.Model):
    uid = models.AutoField(primary_key=True)
    data = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    org_name = models.CharField(max_length=255)
    org_email = models.EmailField(unique=True)
    org_password = models.CharField(max_length=255)

    def save(self, *args, **kwargs):
        self.org_password = make_password(self.org_password)
        super(Organization, self).save(*args, **kwargs)

    def __str__(self):
        return self.org_name

# Teacher Model
class Teacher(models.Model):
    uid = models.AutoField(primary_key=True)
    data = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    teacher_roll = models.CharField(max_length=100)
    teacher_name = models.CharField(max_length=255)
    teacher_email = models.EmailField(unique=True)
    teacher_password = models.CharField(max_length=255)

    def save(self, *args, **kwargs):
        self.teacher_password = make_password(self.teacher_password)
        super(Teacher, self).save(*args, **kwargs)

    def __str__(self):
        return self.teacher_name

# Student Model
class Student(models.Model):
    uid = models.AutoField(primary_key=True)
    data = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    student_roll = models.CharField(max_length=100)
    student_name = models.CharField(max_length=255)
    student_email = models.EmailField(unique=True)
    student_password = models.CharField(max_length=255)
    student_department = models.CharField(max_length=100)

    def save(self, *args, **kwargs):
        self.student_password = make_password(self.student_password)
        super(Student, self).save(*args, **kwargs)

    def __str__(self):
        return self.student_name
