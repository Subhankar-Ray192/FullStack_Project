# Django

## Django:: Secure Environment Variable File Configuration
Upload a simple file with the name {.env} to your local environment with the requirement
environment variable set in to securely and effectively use them in the python code

```
AUTH_KEY={auth_key}
```

## Django:: Python Code to load Environment Variables

Loading the environment variables that have been set into the uploaded {.env} file
to your local environment

```
import os
from dotenv import load_dotenv
load_dotenv()

print(os.getenv('{PATH_VAR}'))
```

## Django::Configuration Steps

The project name for our purposes has been defined as server
System. The application name for this puporse will be

``` 
!pip install django
!pip install pyngrok --quiet
!pip install djangorestframework.jsonapi
!pip install python-dotenv
!pip install inflection
!pip install django-extensions
!pip install django-cors-headers
!pip install django-filter

!django-admin startproject {project_name}

%cd {project_name}

!python manage.py startapp {app_name}

%cd {app_name}
```

## Django:: Rewritting Views.py

```
%%writefile views.py
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello World")
```

## Django:: Deployment Steps

For our deploement purposes, we are utilizing a free open-source resource called
ngrok. The documentation link has been provided for ngrok above. We are tunelling
our website through the free-key that will be generated in ngrok dashboard. For all
purposes, the port that we will be tunelling is 7000. Also, the {.env} file mentioned above must be uploaded before this code can be executed.

```
!pip install pyngrok --quiet

from pyngrok import ngrok
import os
from dotenv import load_dotenv
load_dotenv()

ngrok.kill()

ngrok.set_auth_token({AUTH_KEY})

%cd /content/{project_name}

!python manage.py migrate
!python manage.py runserver {port}

ngrok.kill()
```
