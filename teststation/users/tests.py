from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase, APIClient
from users.models import User
from django.contrib.auth import get_user_model

class LoginViewTests(APITestCase):
    def setUp(self):
        """
        Create a user for testing login functionality.
        """
        self.email = "admin@admin.com"
        self.password = "admin12345"
        self.user = get_user_model().objects.create_user(email=self.email, password=self.password)

        self.client = APIClient()
        self.url = reverse('login')  
        
    def test_login_success(self):
        """
        Test a successful login with correct credentials.
        """
        data = {'email': self.email, 'password': self.password}
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('Success', response.data)
        self.assertTrue(response.data['Success'])

    def test_login_invalid_credentials(self):
        """
        Test login with incorrect credentials.
        """
        data = {'email': self.email, 'password': 'wrongpassword'}
        response = self.client.post(self.url, data, format='json')
        print(response.json())
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('ERROR', response.data)
        self.assertEqual(response.data['ERROR'], 'Invalid Credentials')

    def test_login_user_not_exist(self):
        """
        Test login with a non-existing user.
        """
        data = {'email': 'notexist@admin.com', 'password': self.password}

        response = self.client.post(self.url, data, format='json')
        print(f"here is the error: {response.json()}")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('ERROR', response.data)
        self.assertEqual(response.data['ERROR'], 'Invalid Credentials')

    def test_login_missing_fields(self):
        """
        Test login with missing fields.
        """
        data = {'email': self.email}
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn('password', response.data)
        self.assertEqual(response.data['password'][0], 'This field is required.')
