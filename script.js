var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var submitBtn = document.getElementById("submitBtn");

var form = document.getElementById("form");

function validateName() {
  var error = nameInput.nextElementSibling;
  if (nameInput.value.trim() === "") {
    error.textContent = "Name is required";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validateEmail() {
  var error = emailInput.nextElementSibling;
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(emailInput.value)) {
    error.textContent = "Invalid email";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function validatePassword() {
  var error = passwordInput.nextElementSibling;

  if (passwordInput.value.length < 8) {
    error.textContent = "Password must be at least 8 characters";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}

function checkFormValidity() {
  var isValid =
    validateName() &&
    validateEmail() &&
    validatePassword();

  submitBtn.disabled = !isValid;
}

nameInput.addEventListener("input", checkFormValidity);
emailInput.addEventListener("input", checkFormValidity);
passwordInput.addEventListener("input", checkFormValidity);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Form submitted successfully!");
});