# Use a base image with Python
FROM python:3.11-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && \
    apt-get install -y \
    curl \
    sudo \
    mysql-server \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 20
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && \
    apt-get install -y nodejs

# Confirm installations
RUN node -v && npm -v

# Install Python dependencies
RUN pip install --upgrade pip && \
    pip install django pyngrok djangorestframework-jsonapi python-dotenv \
    inflection django-extensions django-cors-headers django-filter mysql-connector

# Copy the project files
COPY . /app/

# Install npm dependencies for the React app
RUN cd ers_front && npm install

# Build the React frontend
RUN cd ers_front && npm run build

# Django setup commands
RUN python manage.py collectstatic --no-input && \
    python manage.py makemigrations && \
    python manage.py migrate

# Expose port 7000
EXPOSE 7000

# Define the command to run the server
CMD ["bash", "-c", "service mysql start && python manage.py runserver 0.0.0.0:7000"]
