const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let isValid = true;
  emailError.textContent = '';
  passwordError.textContent = '';

  if (!emailInput.value.trim()) {
    emailError.textContent = 'Email is required.';
    isValid = false;
  } else if (!emailInput.validity.valid) {
    emailError.textContent = 'Enter a valid email address.';
    isValid = false;
  }

  if (!passwordInput.value.trim()) {
    passwordError.textContent = 'Password is required.';
    isValid = false;
  } else if (passwordInput.value.length < 6) {
    passwordError.textContent = 'Password needs at least 6 characters.';
    isValid = false;
  }

  if (isValid) {
    alert('Login successful!');
    form.reset();
  }
});
