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

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Expose port 8000 for the Django server
EXPOSE 8000

# Set the default command to run the Django development server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
