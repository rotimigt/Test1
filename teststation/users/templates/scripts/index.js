import * as _ from './validate/validate.js'

const form = document.querySelector('.form');
const email = document.querySelector('.email-input');
const result = document.querySelector('.result');
const togglePassword = document.querySelector('.toggle-password-icon');
const passwordInput = document.querySelector('.password-input');
const errorMsg = document.querySelector('.error-message');
const btnMenu = document.getElementsByClassName("btn-menu");
const body = document.body

// Function to validate input and update result
function validate() {

    const emailInput = email.value
    result.textContent = '';

    if (_.validateEmail(emailInput)) {
        result.textContent = '';
    }

    else {
        result.textContent = 'Email is invalid.';
        result.style.color = '#e59e9e';
    }
}

function togglePasswordVisibility() {

    if (passwordInput.type === 'password') {
        togglePassword.setAttribute('src', "./assets/icons/view.svg")
        passwordInput.type = 'text';
        togglePassword.title = 'Show Password'; // Update title
    }

    else {
        passwordInput.type = 'password';
        togglePassword.setAttribute('src', "./assets/icons/hide.svg")
        togglePassword.title = 'Hide Password'; // Update title
    }
}

function handleSubmit(e) {
    e.preventDefault();
    const emailInput = email.value
    const password = passwordInput.value;

    if (!_.validateEmail(emailInput)) {
        result.textContent = 'Please enter a valid email.';
        result.style.color = '#e59e9e';
        return false;
    }

    const passwordFeedback = _.validatePassword(password)

    if (passwordFeedback.length > 0) { 
        errorMsg.textContent = `${passwordFeedback[0]}`;
        errorMsg.style.color = '#e59e9e';
        return false;
    }

    console.log('successful')
    //Once form has been validated , then submit
}

function clearError() { 
    errorMsg.textContent = ''
}




for (var i = 0; i < btnMenu.length; i++) {
    btnMenu[i].addEventListener('click', function () {
        body.classList.toggle('menu-open');
    });
}

// Attach the validate function to the input event
email.addEventListener('input', validate);
email.addEventListener('change', validate);

// Toggle password visibility
togglePassword.addEventListener('click', togglePasswordVisibility);


//Submit form
form.addEventListener('submit', handleSubmit)
passwordInput.addEventListener('input',clearError)