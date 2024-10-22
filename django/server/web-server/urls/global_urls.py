from django.contrib import admin
from django.urls import path, include  # Import the include function

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('pages.urls')),  # Include the URLs of home_app at the root URL
    path('register/', include('authenticate.urls')),
     path('login/', include('authorize.urls')),
]
