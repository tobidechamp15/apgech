const form = document.getElementById("form");

document.addEventListener("keydown", checkPasswordStrength);
form.addEventListener("submit", handleSubmit);
const errorText = document.getElementById("error");
errorText.style.color = "red";

function handleSubmit(event) {
  event.preventDefault(); // Prevent default javascript features from executing like refreshing the page
  const username = event.target.elements.username.value;
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  // alert("username " + username);

  // event.target.elements.username.value = "NAme from user"; //Giving the input a value
  // return;
  // Validation starts
  if (username.length <= 8) {
    // alert("username is 8 characters")
    errorText.textContent = "Username is less than or equal to 8 characters";
    return;
  }

  if (password.length < 6) {
    errorText.textContent = "Pasword length is less than 6 characters";
    return;
  }

  // Validation ends
  sessionStorage.setItem("username", username);
  sessionStorage.setItem("email", email);
  window.location.href = "/index.html"; // point of navigation 
}

const password = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const passwordStatus = document.getElementById("passwordStatus");
function checkPasswordStrength() {
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
}
const firstBtn = document.getElementById("firstBtn");

// firstBtn.addEventListener("click", clickFirstBtn);
// firstBtn.addEventListener("click", clickFirstBtn);
// firstBtn.addEventListener("click", clickFirstBtn);

// Local Storage

//getItem =
localStorage.setItem("Key", "Value"); // storing to local storage
const localStored = localStorage.getItem("Key"); // getting from localstorage
console.log(localStored); // loggin to the console

//------------Java Script Async Programming------------

// JavaScript normally runs one statement at a time.

// Each statement must finish before the next statement can run.

// If a task takes a long time, it can block the page and make the browser feel frozen.

// Asynchronous programming lets JavaScript start a long-running task and continue running other code while waiting for the result.

// ------------Control FLow------------

// Control flow is the order in which statements are executed in a program

// From top to bottom and left to right.

function myFirst() {
  alert("Hello");
}

function mySecond() {
  alert("Goodbye");
}

// mySecond();

// myFirst();

// ------------WHy Async Programming------------

//1. Downloading data
//1. Reading Files
//3. Waiting for events
//Waiting for user input
// Waiting for a timer

//------------Asynchronous flow------------
// - This refers to how Javascript allows cetain operations to run in the background and let their results be handled when they are ready

// ------------Different ways to handle async results------------

// Callbacks
// Promises
// Async functions and await

// ------------Asynchronous Concept------------

// Synchronous - Javasript standard flow is executing line by line
// Timers - Allows code to run while other code is waiting.
//Callbacks

setTimeout(myFunction, 3000);

function myFunction() {
  // alert("I love You !!");
}
// EVents == Stores callback function waiting to be executed (event Listeners)
firstBtn.addEventListener("click", clickFirstBtn);

//Promises = Tools to handle asynchronous operations cleanly.

// Async / await The clean and modern way to handle async code.
// await fetch("www.google.com");
// ------------Common Asynchronous Operations------------

// Timer - setTimeout()
// Network Request - fetch()
//User interaction - click events
//Animation - requestAnimationFrame()
//Web workers - Background Processing

// ------------ Asynchronous vs Parallel ------------

// Parallel means doing multiple things at the same time
// Ascynchronous means switching between tasks
