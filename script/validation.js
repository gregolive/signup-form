(() => {
  // DOM elements
  const form = document.querySelector('form');
  const firstname = document.getElementById('firstname');
  const lastname = document.getElementById('lastname');
  const email = document.getElementById('email');
  const phone = document.getElementById('phone');
  const password = document.getElementById('password');
  const passwordConfirm = document.getElementById('password-confirm');

  // Show errors
  
  const showError = (input, title, validChars = '') => {
    const errorField = input.nextElementSibling;
  
    if (input.validity.valueMissing) {
      errorField.textContent = `You must enter your ${title}.`;
    } else if (input.validity.patternMismatch) {
      errorField.textContent = `Entered value can only contain ${validChars}.`;
    } else if (input.validity.typeMismatch) {
      errorField.textContent = `Entered value must be a valid ${title}.`;
    }

    input.classList.add('error');
  }

  // Monitor inputs

  firstname.addEventListener('input', () => {
    if (firstname.validity.valid) {
      firstname.nextElementSibling.textContent = '';
      firstname.classList.remove('error');
    } else {
      showError(firstname, 'first name', 'letters');
    }
  });

  lastname.addEventListener('input', () => {
    if (lastname.validity.valid) {
      lastname.nextElementSibling.textContent = '';
      lastname.classList.remove('error');
    } else {
      showError(lastname, 'last name', 'letters');
    }
  });

  email.addEventListener('input', () => {
    if (email.validity.valid) {
      email.nextElementSibling.textContent = '';
      email.classList.remove('error');
    } else {
      showError(email, 'email');
    }
  });

  phone.addEventListener('input', () => {
    if (phone.validity.valid) {
      phone.nextElementSibling.textContent = '';
      phone.classList.remove('error');
    } else {
      showError(phone, 'phone number', 'numbers and dashes');
    }
  });

  // Validate form submit

  form.addEventListener('submit', (e) => {  
    if (!firstname.validity.valid) {
      showError(firstname, 'first name', 'letters');
      e.preventDefault();
    }

    if (!lastname.validity.valid) {
      showError(lastname, 'last name', 'letters');
      e.preventDefault();
    }

    if (!email.validity.valid) {
      showError(email, 'email');
      e.preventDefault();
    }

    if (!phone.validity.valid) {
      showError(phone, 'phone number', 'numbers and dashes');
      e.preventDefault();
    }
  });
})();