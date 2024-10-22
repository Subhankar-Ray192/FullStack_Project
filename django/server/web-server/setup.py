import os

# Define the folder paths
folder_paths = ['content/server/pages', 'content/server/authenticate', 'content/server/authorize']

# Define the file names
file_names = ['urls.py', 'serializers.py']

# Create directories and files
for folder_path in folder_paths:
    # Create the directory if it doesn't exist
    os.makedirs(folder_path, exist_ok=True)

    # Create files in the folder
    for file_name in file_names:
        # Define the file path
        file_path = os.path.join(folder_path, file_name)

        # Create the file with some basic content
        with open(file_path, 'w') as file:
            if file_name == 'urls.py':
                file.write('''from django.urls import path\n\nurlpatterns = [\n    # Add your URL patterns here\n]\n''')
            elif file_name == 'serializers.py':
                file.write('''from rest_framework import serializers\n\n# Add your serializers here\n''')

        print(f'{file_name} has been created at {file_path}')
