import os
import shutil

class ProjectManager:
    def __init__(self, root_folder):
        self.root_folder = root_folder

    def create_folders(self, folders):
        """Creates folders recursively."""
        for folder in folders:
            os.makedirs(folder, exist_ok=True)
            print(f'Created folder: {folder}')

    def create_files(self, files):
        """Creates files with their respective content."""
        for file_path, file_content in files.items():
            os.makedirs(os.path.dirname(file_path), exist_ok=True)
            with open(file_path, 'w') as file:
                file.write(file_content)
                print(f'Created file: {file_path}')

    def delete_files(self, files):
        """Deletes specified files."""
        for file_path in files:
            if os.path.exists(file_path):
                os.remove(file_path)
                print(f'Deleted file: {file_path}')
            else:
                print(f'File not found: {file_path}')

    def create_django_files(self, folder_paths, file_names):
        """Creates Django-specific folders and files."""
        for folder_path in folder_paths:
            os.makedirs(folder_path, exist_ok=True)
            for file_name in file_names:
                self._create_django_file(folder_path, file_name)

    def _create_django_file(self, folder_path, file_name):
        """Helper method to create a single Django file with default content."""
        file_path = os.path.join(folder_path, file_name)
        with open(file_path, 'w') as file:
            if file_name == 'urls.py':
                file.write('''from django.urls import path\n\nurlpatterns = [\n    # Add your URL patterns here\n]\n''')
            elif file_name == 'serializers.py':
                file.write('''from rest_framework import serializers\n\n# Add your serializers here\n''')
        print(f'{file_name} has been created at {file_path}')

    def copy_tree(self, src, dst):
        """Copies files and directories from source to destination."""
        if not os.path.exists(dst):
            os.makedirs(dst)

        for item in os.listdir(src):
            source_item = os.path.join(src, item)
            destination_item = os.path.join(dst, item)

            if os.path.isdir(source_item):
                self.copy_tree(source_item, destination_item)
            else:
                self._copy_or_overwrite_file(source_item, destination_item)

    def _copy_or_overwrite_file(self, source, destination):
        """Helper method to copy or overwrite a file."""
        if os.path.exists(destination):
            with open(source, 'r') as source_file:
                content = source_file.read()
            with open(destination, 'w') as destination_file:
                destination_file.write(content)
            print(f'Overwritten file: {destination}')
        else:
            shutil.copy2(source, destination)
            print(f'Copied file: {destination}')

# Example usage
if __name__ == "__main__":
    # Initialize ProjectManager with the root folder
    project_manager = ProjectManager(root_folder='content/server')

    # Folders and files to manage
    folders_to_create = []  # Add your folders here
    files_to_create = {}    # Add your files with content here
    files_to_delete_src = [
        'content/server/client/src/App.css',
        'content/server/client/src/App.test.js',
        'content/server/client/src/logo.svg',
        'content/server/client/src/setupTests.js',
        'content/server/client/src/index.css'
    ]
    files_to_delete_public = []  # Add any files to delete from public/ if needed
    folder_paths = ['content/server/pages', 'content/server/authenticate', 'content/server/authorize']
    file_names = ['urls.py', 'serializers.py']

    # Execute project management tasks
    project_manager.create_folders(folders_to_create)
    project_manager.create_files(files_to_create)
    project_manager.delete_files(files_to_delete_src)
    project_manager.delete_files(files_to_delete_public)
    project_manager.create_django_files(folder_paths, file_names)

    # Define source and destination paths for copying
    source_folder = '/content/drive/MyDrive/Project_Exam_Room_Allocation/Code/client'  # Replace with your actual source path
    destination_folder = 'content/server/client'

    # Copy the client folder to content/server
    project_manager.copy_tree(source_folder, destination_folder)
    print(f'Copied contents from {source_folder} to {destination_folder}')
