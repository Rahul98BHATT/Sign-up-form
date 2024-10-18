const form = document.querySelector("form"),
  usernameField = form.querySelector(".username-field"),
  usernameInput = usernameField.querySelector(".username"),
  emailField = form.querySelector(".email-field"),
  emailInput = emailField.querySelector(".email"),
  passField = form.querySelector(".create-password"),
  passInput = passField.querySelector(".password"),
  cPassField = form.querySelector(".confirm-password"),
  cPassInput = cPassField.querySelector(".cPassword"),
  outputDiv = document.getElementById("output"); // Get the output div

// Username Validation
function checkUsername() {
  const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/;
  if (!usernameInput.value.match(usernamePattern)) {
    return usernameField.classList.add("invalid"); // adding invalid class if username value does not match pattern
  }
  usernameField.classList.remove("invalid"); // removing invalid class if username is valid
}

// Email Validation
function checkEmail() {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailInput.value.match(emailPattern)) {
    return emailField.classList.add("invalid"); // adding invalid class if email value does not match pattern
  }
  emailField.classList.remove("invalid"); // removing invalid class if email is valid
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.parentElement.querySelector("input"); // getting parent element of eye icon and selecting the password input
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      return (pInput.type = "text");
    }
    eyeIcon.classList.replace("bx-show", "bx-hide");
    pInput.type = "password";
  });
});

// Password Validation
function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!passInput.value.match(passPattern)) {
    return passField.classList.add("invalid"); // adding invalid class if password input value does not match pattern
  }
  passField.classList.remove("invalid"); // removing invalid class if password is valid
}

// Confirm Password
function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    return cPassField.classList.add("invalid");
  }
  cPassField.classList.remove("invalid");
}

// Form Submit Handler
form.addEventListener("submit", (e) => {
  e.preventDefault(); // preventing form submission
  checkUsername();
  checkEmail();
  createPass();
  confirmPass();

  // calling functions on key up for live validation
  usernameInput.addEventListener("keyup", checkUsername);
  emailInput.addEventListener("keyup", checkEmail);
  passInput.addEventListener("keyup", createPass);
  cPassInput.addEventListener("keyup", confirmPass);

  // Check if all fields are valid
  if (
    !usernameField.classList.contains("invalid") &&
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    // Output to the console
    console.log("Username:", usernameInput.value);
    console.log("Email:", emailInput.value);
    console.log("Password:", passInput.value);

    // Display output on the screen
    outputDiv.innerHTML = `
      <p><strong>Username:</strong> ${usernameInput.value}</p>
      <p><strong>Email:</strong> ${emailInput.value}</p>
      <p><strong>Password:</strong> ${passInput.value}</p>
    `;
  }
});
