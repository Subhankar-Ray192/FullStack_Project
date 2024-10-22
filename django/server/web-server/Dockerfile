# Use an official Python runtime as a base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the requirements file to the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Check if Python and Django are installed
RUN python --version && django-admin --version

# Create a new Django project and apps
RUN django-admin startproject server && \
    cd /usr/src/app/server && \
    python manage.py startapp pages && \
    python manage.py startapp authenticate && \
    python manage.py startapp authorize

# Copy the setup.py script into the container
COPY setup.py /usr/src/app/server/setup.py

# Run setup.py to create necessary files
RUN cd /usr/src/app/server && \
    python setup.py

# Copy the already created settings.py into the correct location
COPY settings.py /usr/src/app/server/server/settings.py

# Collect static files
RUN cd /usr/src/app/server && \
    python manage.py collectstatic --noinput

# Make migrations for the database
RUN cd /usr/src/app/server && \
    python manage.py makemigrations

# Expose port 7000 for the Django server
EXPOSE 7000

# Set the default command to run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:7000"]
