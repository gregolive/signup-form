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
  
  const showError = (input, title) => {
    const errorField = input.nextElementSibling;
  
    if (input.validity.valueMissing) {
      errorField.textContent = `You need to enter your ${title}.`;
    } else if (input.validity.patternMismatch) {
      errorField.textContent = 'Entered value contains invalid characters.';
    } else if (input.validity.typeMismatch) {
      errorField.textContent = `Entered value needs to be a proper ${title}.`;
    }

    input.classList.add('error');
  }

  // Monitor inputs

  firstname.addEventListener('input', () => {
    if (firstname.validity.valid) {
      firstname.nextElementSibling.textContent = '';
      firstname.classList.remove('error');
    } else {
      showError(firstname, 'first name');
    }
  });

  // Validate form submit

  form.addEventListener('submit', (e) => {  
    if (!firstname.validity.valid) {
      showError(firstname, 'first name');
      e.preventDefault();
    }
  });
})();