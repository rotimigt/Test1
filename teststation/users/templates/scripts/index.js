// import * as _ from '../utils';

const form = document.querySelector('.form');
const email = document.querySelector('.email-input');
const result = document.querySelector('.result');
const togglePassword = document.querySelector('.toggle-password-icon');
const passwordInput = document.querySelector('.password-input');
const emailError = document.querySelector('.error-message');


function validateEmail(email) {
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(emailPattern);
  }

  // Function to validate input and update result
function validate() {

const emailInput = email.value
      result.textContent = '';

    if (validateEmail(emailInput)) {
      result.textContent = '';
    }
    else {
      result.textContent =  'Email is invalid.';
        result.style.color = 'black';
    }
  }


function togglePasswordVisibility() {

    if (passwordInput.type === 'password') {
    togglePassword.setAttribute('src', "./assets/icons/view.svg")
      passwordInput.type = 'text';
        togglePassword.title = 'Hide Password'; // Update title
    }
    else {
        passwordInput.type = 'password';
    togglePassword.setAttribute('src', "./assets/icons/hide.svg")
       togglePassword.title = 'Show Password'; // Update title
    }
  }


function handleSubmit(e) {
    e.preventDefault();
    const emailInput = email.value
    const password = passwordInput.value;

    if (!validateEmail(emailInput)) {
        result.textContent = 'Please enter a valid email.';
        result.style.color = 'red';
        return false;
      }
  
      if (password.length < 8) {
        result.textContent = 'Password must be at least 8 characters long.';
        result.style.color = 'red';
        return false;
      }
    
    //Once form has been validated , then submit
}


// Attach the validate function to the input event
email.addEventListener('input', validate);
email.addEventListener('change', validate);

// Toggle password visibility
togglePassword.addEventListener('click', togglePasswordVisibility);

//Submit form
form.addEventListener('submit',handleSubmit)