const formNewsLetter = document.querySelector(".formnewsletter");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");

formNewsLetter.addEventListener('submit', (e) => {
  e.preventDefault();
  handleNewsLetter();
});

function handleNewsLetter() {
  // Values from dom elements ( input )
  const userNameValue = userName.value.trim();
  const emailValue = email.value.trim();

  //  Checking for username
  if (userNameValue === '' || userNameValue === null || userNameValue === undefined) {
    setErrorFor(userName);
  } else {
    showSucces(userName);
  }

  // Checking for email
  if (emailValue === '' || emailValue === null || emailValue === undefined) {
    setErrorFor(email);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email);
  } else {
    showSucces(email);
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