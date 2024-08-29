const form = document.querySelector('.form')
const email = document.querySelector('.email-input')
const result = document.querySelector('.result');
const togglePassword = document.querySelector('.toggle-password-icon');
const passwordInput = document.querySelector('.password-input')
const emailError = document.querySelector('.error-message');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

form.onclick = function (e) {
    console.log(e)
    e.preventDefault();
};

function validateEmail(email) {
    console.log(email)
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(emailPattern);
  }

  // Function to validate input and update result
function validate() {
const emailInput = email.value
      result.textContent = '';

    if (validateEmail(emailInput)) {
      result.textContent = 'Email is valid.';
        result.style.color = 'green';
        console.log('validd')
    } else {
      result.textContent =  'Email is invalid.';
        result.style.color = 'black';
        console.log('invalid')
    }
  }

  function clearEmailError() {
    result.textContent = ''; // Clear the error message
  }



  // Attach the validate function to the input event
  document.getElementById('email').addEventListener('input', validate);
document.getElementById('email').addEventListener('change', validate);
  

