# Welcome to the Teststation Project

Hello! You are expected to carefully go through this project to fully understand its requirements and functionality.

## Brief Summary

This is your Teststation project, and you are expected to render and expose the following APIs on a frontend page. You have just two endpoints to work with:

1. **User Login Endpoint**
2. **Schedule List Endpoint**

We are not looking for a beautiful frontend page. A simple page that properly interacts with the necessary endpoints will suffice. We are also interested in seeing how you render the data from the backend.

## Tasks

### Task 1: Create a Login Page

- Create a login page that interacts with the necessary endpoint to authenticate the user.

**User Credentials:**

- **Email:** `admin@admin.com`  
- **Password:** `admin12345`  

### Task 2: Create a Table to Render Schedule Data

- Create a table to display the data retrieved from the schedules endpoint.
- Use the data keys as table columns and the data values as table rows.

## Guidelines

1. Create your branch on your local machine:

2. Push your branch to the repository; this will be your working environment where  we will grade your code

3. Clone the repository to your local machine

4. Navigate into the "teststation" directory using your terminal

5. Run the following command to download all the necessary packages

pip install -r requirements.txt

Note: Ensure you have Python and pip installed and properly set up to run the above command.

6. After the command has run completely without any errors, run the next command to start up your live server on your local machine

python manage.py runserver

7. Navigate to http://127.0.0.1:8000/apis to view the list of available APIs.

8. Please use any version of Jinja for this project.
