const contactForm = document.querySelector("#contactform");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const contactEmail = document.querySelector("#contactemail");
const message = document.querySelector("#message");

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleContact();
});

function handleContact() {
  // Values from dom elements ( input )
  const firastNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = contactEmail.value.trim();
  const messageValue = message.value.trim();

  //  Checking for firstname
  if (firastNameValue === '' || firastNameValue === null || firastNameValue === undefined) {
    setErrorFor(firstName);
  } else {
    showSucces(firstName);
  }

  //  Checking for lastname
  if (lastNameValue === '' || lastNameValue === null || lastNameValue === undefined) {
    setErrorFor(lastName);
  } else {
    showSucces(lastName);
  }

  // Checking for email
  if (emailValue === '' || emailValue === null || emailValue === undefined) {
    setErrorFor(contactEmail);
  } else if (!isEmail(emailValue)) {
    setErrorFor(contactEmail);
  } else {
    showSucces(contactEmail);
  }

  // Checking for message
  if (messageValue === '' || messageValue === null || messageValue === undefined) {
    setErrorFor(message);
  } else {
    showSucces(message);
  }
}

// SET ERROR MESSAGE
function setErrorFor(input) {
  const inputbox = input.parentElement;
  inputbox.classList.add('error');
}

// REMOVE ERROR MESSAGE
function showSucces(input) {
  const inputbox = input.parentElement;
  inputbox.classList.remove('error');
  inputbox.classList.add('success');
}

// To check if email is valid or not
function isEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}