const form = document.getElementById("form");

document.addEventListener("keydown", checkPasswordStrength);
form.addEventListener("submit", handleSubmit);
const errorText = document.getElementById("error");
errorText.style.color = "red";

const handleSubmit = (e) => {
  e.preventDefault();
  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;
  const email = e.target.elements.email.value;

  // alert("username " + username);

  // Validation starts
  if (username.length <= 8) {
    // alert("username is 8 characters")
    errorText.textContent = "username is less than 8 characters";
    return;
  }

  if (password.length < 6) {
    errorText.textContent = "Pasword length is less than required";
    return;
  }

  // Validation ends
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("email", email);
  window.location.href = "/index.html"; // point of navigation
};
const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const passwordStatus = document.getElementById("passwordStatus");
const checkPasswordStrength = function () {
  const passwordContent = password.value;
  // alert(passwordContent);
  // if (passwordContent < 4) {
  //   passwordStatus.textContent = "Your password is weak";
  //   submitBtn.disabled = true;
  //   return;
  // } else if (passwordContent > 4 && passwordContent < 7) {
  //   submitBtn.disabled = true;
  //   passwordStatus.textContent = "Your password is partially okay";
  //   return;
  // } else if (passwordContent > 7) {
  //   submitBtn.disabled = false;
  //   passwordStatus.textContent = "Stronggg";
  // }

  const isValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      passwordContent,
    );

  if (isValid) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};
const firstBtn = document.getElementById("firstBtn");

// firstBtn.addEventListener("click", clickFirstBtn);
// firstBtn.addEventListener("click", clickFirstBtn);
// firstBtn.addEventListener("click", clickFirstBtn);
