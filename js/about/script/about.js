// var isElligible; //Creation -- isElligible is the variable name

// var user = prompt("What is your age"); //initialization

// if (user < 13) {
//   isElligible = false; // initialisation
//   alert("User is not Eligible");
// } else {
//   isElligible = "true";
// }
// var nameJorr = `"TObi"`; //using backticks
// var statement = "" + nameJorr,
//   isVerified = true;

//I am isElligible

//Objecct defintion

var user = [
  {
    name: "Tobi",
    amount: "12,000.08",
    gender: "Male",
    hobbies: {
      hobby1: "Para Gliding",
      hobby2: "Ice Skating",
    },
  },
  {
    name: "Tobi",
    amount: "1,200.06",
    gender: "Male",
    hobbies: {
      hobby1: "Para Gliding",
      hobby2: "Ice Skating",
    },
  },
  {
    name: "Tobi",
    amount: "12",
    gender: "Male",
    hobbies: {
      hobby1: "Para Gliding",
      hobby2: "Ice Skating",
    },
  },
  {
    name: "Tobi",
    age: 12,
    gender: "Male",
    hobbies: {
      hobby1: "Para Gliding",
      hobby2: "Ice Skating",
    },
  },
];
var hobbies = ["Para GLiding", "Drinking"];
var document = "document";
console.log(user);

// function functtionNAme() {}

// Built - IN functions in JS

// 1. alert("Please fill all the form fields")

// 2. confirm("Are you a boy")

// const gender = confirm("Do you want to continue");

// if (gender) {
//   alert("User continues");
// } else {
//   alert("User cancels process");
// }

// 3. parseInt() used to convert strings to numbers
// const string = "234";

// const convertedString = parseInt(string);

// console.log("String to be converted ", string);
// console.log("String that has been converted ", convertedString);

//4. parseFloat() converts stings with decimal to number

const string = "234.709";

const convertedString = parseFloat(string); // allows decimal point
const convertedString2 = parseInt(string); // discards the decimal on the string

console.log("String to be converted ", string);
console.log("String that has been converted ", convertedString);
console.log("String that has been converted2 ", convertedString2);

// 5. eval() evaluates an expression and returns the evaluated result

const value1 = 234;
const value2 = 123;

const evalResultAdd = eval("2+2");
const evalResult = eval(value1 + value2);

console.log(evalResultAdd);
console.log(evalResult);

// 6. isNAN i.e not a number (not reliable!!!!)
const num = "234";
// isNaN("234");
const anyVariableName = isNaN(num);

console.log(anyVariableName);

// 7. prompt() accepts a values from the user through a textbox

// const firstNumber = prompt("Enter your first number");
// const secondNumber = prompt("Enter the second number");

// const sum = eval(parseInt(firstNumber) + parseInt(secondNumber));

// console.log(sum);

// ZEvents

// Event bubbling

// const paragraph = document.getElementById("paragraph");
// const button = document.getElementById("changeColor");

// button.addEventListener("click", function () {
//   const italicTexts = document.querySelectorAll("i");

//   italicTexts.forEach(function (italicText) {
//     italicText.style.color = "red";
//   });
// });

// const inputFocus = document.getElementById("inputFocus"); // acessing the element of id inputFocus
// const div = document.querySelector("div");
// const idedElement = document.querySelector("#nameOfTheID");
// const className = document.querySelector(".className");
// inputFocus.addEventListener("click", function () {    // assigning the event
//   alert("input focused on");  // assign the task or function to be performed
// });

// $(document).ready(function () {
//   $("#changeColor") // accessing the element of id ('changeColor')
//     .click(
//       // assigning the event
//       function () {
//         // alert("Welcome to JQuery");
//         $("i").css("display", "none");
//       }, // assign the function or task to be performed
//     );
// });

//Operators and Statements

var num1 = 92;

// num1 is the variable
// 2 is the value of the vairable
//

var num2 = 4;

let sum = num1 * 1; //generates a new value (single operator involved)
console.log("sum before increment", sum);
console.log("num1 before increment", num1);
num1++; // changes the value of a variable (two operators involved)
num1++; // changes the value of a variable (two operators involved)
num1++; // changes the value of a variable (two operators involved)
console.log("num1 after increment", num1);
console.log("num1 after increment", num1);
// num1  and num2 are operands

// let division = num1 / num2; //expression

// let average = sum / division;
// operator is +
// sum = 6
// num1num2

if (sum < 6) {
}

// funciton();
// {
//   for (let i; i <= 6; ) {}
// }

//Unary Operator
//binary Operator
//Ternary Operator
sum = 2;
let isElligibleTernary =
  sum >= 8 //condition
    ? "Elligible" // if true return this
    : "Not Elliglbie"; // if false return this

let notOfIsElligible = !isElligibleTernary;

let isElligible;

if (sum >= 8) {
  isElligible = "Elligible";
} else {
  isElligible = "Not Elliglbie";
}

console.log("Is Elliglible Ternary", isElligibleTernary);
console.log("Is Elliglible ifCondition", isElligible);

//Binary opration
//Operator Precedence
// (3 + 2 + 4 + 41) / 45;

// 5 + 4 + 41 - 45
// 9 + 41 - 45
// 50 - 45
// 5

//  Arithmetic Operator

// % Modulo - Divides the first operand by second operand and the returns the remainder

function calculateLoanInterest() {
  const amount = document.getElementById("amount");
  const error = document.getElementById("error"); //getting the error element
  let amountEntered = parseInt(amount.value);
  // if (amountEntered=null)
  if (amount.value < 1000) {
    error.textContent = "Enter amount jorr!!";
    error.style.padding = "20px";
    return;
  }

  let interestRate;

  interestRate = amountEntered >= 10000 ? 30 : amountEntered > 20000 ? 20 : 10;

  const interest = amountEntered * (interestRate / 100);
  const totalAmount = amountEntered + interest;

  const rate = document.getElementById("rate");
  rate.textContent = totalAmount;
}

const button = document.getElementById("calculator");

// button.addEventListener("click", calculateLoanInterest);

function calculateLoanDetails() {
  const amount = user.loanOwed;
}

let numOne = 2;

// console.log("Pre-Increment", ++numOne);
// console.log("Post-Increment", numOne++);  // console.log(numOne) + 1 = 3
// console.log("Num-one", numOne);

console.log("Pre-Decrement", --numOne);

console.log("Post-Increment", numOne--); // console.log(numOne) - 1 = 1
console.log("Post-Increment", numOne);

// for (let i; i++; i < 9) {
//   // console.log("invremented i", i);
// }

if (3 !== "3") {
  console.log("not equal");
}

let hobby = "Dancing";

var array2 = ["ere", "oko"];
const type1 = typeof array2;
console.log(type1);

const regexNumber = /^\d+$/;

const regex = new RegExp("hello");

console.log(regex.exec("world hello")); // true
console.warn(regex.test("Hi there")); // false

//// Functions

//Addition Subtraction

function addition(num1, num2) {
  const sum = num1 + num2; //performing actions
  return sum; // returning values

  console.log(sum);
}

// addition(23, 12);

const userObj = {
  userName: "Baba Blue",
  hobby: "dancing",
  Age: 123,
  height: "123cm",
  numberOfBugattis: 23,
  numberOfHonda: 100,
};

function loadDetails(userObj) {
  // GEtting all elements
  const username = document.querySelector("#username");
  const hobby = document.getElementById("hobby");
  const age = document.getElementById("age");
  const height = document.getElementById("height");
  const cars = document.getElementById("cars");
  const image = document.getElementById("image");

  const stringExample = "String Example";
  console.log(document.querySelector("#username"));
  console.log(image);
  console.log(stringExample.length);

  //Assigning values from the object as parameter
  // username.textContent = userObj.userName;
  hobby.innerHTML = userObj.hobby;
  age.innerHTML = userObj.Age;
  checkAge(userObj.Age);
  height.innerHTML = userObj.hobby;
  cars.textContent = addition(userObj.numberOfBugattis, userObj.numberOfHonda); //using function 'addition' to add two numbers
}

function checkAge(age) {
  if (age < 3) {
    return;
  }
  console.log("kkmks");
}
// While calling the function we passsing the object as the parameter
// loadDetails(userObj);
// loadDetails();

function functionToReturnAdeAsString() {
  return "Ade"; // returning Value
}
//  functionToReturnAdeAsString is not performing any action just returning value (Ade)

// Factorial
// 3! = 3*2*1=6
// 22! = 22 * 21 * 20 * 19

function functionToCalculateFactorial(num) {
  // num = parseInt(prompt("Enter your number"));

  if (num == 0) {
    return 0;
  } else if (num == 1) {
    return 1;
  } else {
    let result = num; //3
    while (num > 1) {
      result = result * (num - 1);
      num--; //2 //1
    }
    // alert(result);
    return result;
  }
}

functionToCalculateFactorial(3);

// Javascript Object

//- Built In Object  (String, Math and Date as examples)
//- Browser  Object (window, navigator,history)
//- HTML  Object

//String Objects

// -- Allows you to retrieve substring of a string
// Searching for a specific character occurrence "I am a man" ("man")
// Merging to set of characters...

const fan = new String("I am a fan");
const stringFan = "I am a fan";

console.log(fan);
console.log(stringFan);

console.log(fan.charAt(3)); // retrieving the character a the entered position
console.log(fan.endsWith("fan")); // endsWith returns true or false
console.log("does fan start with fan?", fan.startsWith("fan")); // startsWith returns true of false
console.log(fan.toUpperCase()); // Converting string to uppercase

const providers = [
  "Prepaid Meter IBEDC",
  "Postpaid Meter IBEDC",
  "Prepaid Meter IKDC",
  "Postpaid Meter IKDC",
];
console.log(providers);
const matchingProvider = providers.filter(function (p) {
  return p.startsWith("Postpaid");
});

console.log(matchingProvider);

// Math Object

var number = 123.64;
let d = Math.floor(number);
let x = Math.round(number);

console.log(x);
console.log(d);

// /Date Object

var date1 = new Date();
var date2 = new Date("July 1, 2026");
var date3 = new Date("2026-07-01T12:00:00");
console.log(date1.getSeconds());
console.log(date2);
console.log(date3);

// Browser Objects

// Web Storage

//Session Storage  - stores data specific to the tab

// Browser -> Domain -> Tab -> Data Stored

// Seeting Data to session Storage
sessionStorage.setItem("keyToBeSet", "valueToBeSetAsValueForTheKey");

function setDataToSessionStorage(key, value) {
  // parameterised function where value and key is the parameter

  sessionStorage.setItem(key, value);
}
// const name= prompt("Entername")
setDataToSessionStorage("name", "Omolola");
setDataToSessionStorage("Age", 2345); //calling the function
setDataToSessionStorage("Hobby", "Dancing");
console.log(parseInt(sessionStorage.getItem("Age")))


// Getting Data from session storage

const name = sessionStorage.getItem("name");


function getDataFromSessionStorage(key) {
  const name = sessionStorage.getItem("name");
  console.log(name);

  return sessionStorage.getItem(key);
}
getDataFromSessionStorage("name");

//Example
const nameS = sessionStorage.getItem("name");
// console.log("age ", age);

// const sessionElement = document.getElementById("sessionName");

// sessionElement.textContent = "Name set to session storage is: " + nameS;

function setUserValues() {
  const userNameEle = document.getElementById("displayUsername");
  const emailEle = document.getElementById("displayEmail");

  if (
    sessionStorage.getItem("username") === null ||
    sessionStorage.getItem("email") === null
  ) {
    userNameEle.style.display = "none";
    emailEle.style.display = "none";
    // window.location.href = "/signin.html"; // Go back to sign in if there is no data in the session storage
  } else {
    userNameEle.style.display = "block";
    emailEle.style.display = "block";
    userNameEle.textContent = "Username: " + sessionStorage.getItem("username");
    emailEle.textContent = "Email: " + sessionStorage.getItem("email");
  }
}
setUserValues();

function signOut() {
  sessionStorage.removeItem("username"); // deleting the values from the storage
  sessionStorage.removeItem("email"); // deleting the values from the storage
  window.location.href = "/signin.html"; // navigates back to sign in
}
// Local storage

// Browser -> Domain  -> Data Stored
