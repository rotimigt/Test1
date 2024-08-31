import * as _ from './validate/validate.js'

const form = document.querySelector('.form');
const email = document.querySelector('.email-input');
const result = document.querySelector('.result');
const togglePassword = document.querySelector('.toggle-password-icon');
const passwordInput = document.querySelector('.password-input');
const errorMsg = document.querySelector('.error-message');
const btnMenu = document.getElementsByClassName("btn-menu");
const body = document.body
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.4
});

sections.forEach(section => {
    observer.observe(section);
});

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

        togglePassword.setAttribute('src', "/static/images/view.svg")
        passwordInput.type = 'text';
        togglePassword.title = 'Show Password'; // Update title
    }

    else {
        passwordInput.type = 'password';
        togglePassword.setAttribute('src', "../../static/images/hide.svg")
        togglePassword.title = 'Hide Password'; // Update title
    }
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
passwordInput.addEventListener('input', clearError)