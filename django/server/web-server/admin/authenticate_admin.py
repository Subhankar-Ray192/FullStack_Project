from django.contrib import admin
from .models import Organization  # Import your model

# Register the Organization model in the admin
@admin.register(Organization)
class OrganizationAdmin(admin.ModelAdmin):
    list_display = ['uid', 'org_name', 'org_email', 'timestamp']  # Fields to display in the admin panel
