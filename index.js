const users = [
  {
    username: 2,
    email: "john@doe.com",
    followers: 10000,
    isVerified: true,
    hobby: {
      name1: "cricket",
      name2: "reading",
      name3: "traveling",
    },
  },
  {
    username: "jane_doe",
    email: "jane@doe.com",
    followers: 2000,
    isVerified: false,
  },
  {
    username: "peter_doe",
    email: "peter@doe.com",
    followers: 3000,
    isVerified: true,
  },
  {
    username: "lisa_doe",
    email: "lisa@doe.com",
    followers: 4000,
    isVerified: false,
  },
  {
    username: "rose_doe",
    email: "rose@doe.com",
    followers: 5000,
    isVerified: true,
  },
];
const firstUser = users[0];

const verifiedUsers = function () {
  var filteredUsers = users.filter(function (user) {
    return user.isVerified;
  });
  console.log(filteredUsers);
};
const usersGreaterThan5K = function () {
  var user = users.filter(function (u) {
    return u.followers > 5000;
  });
  console.log(user);
};
const addUser = function () {
  users.push({
    username: "adam",
    email: "adam@doe.com",
    followers: 7000,
    isVerified: false,
  });
  //   userList.push(newUser);
  console.log(users);
};
const removeUser = function () {
  users.splice(4, 1);
  console.log(users);
};
const displayFirstThree = function () {
  var firstThree = users.slice(0, 3);
  console.log(firstThree);
};
usersGreaterThan5K();
verifiedUsers();
// var newUser = {
//   username: "adam",
//   email: "adam@doe.com",
//   followers: 7000,
//   isVerified: false,
// };
addUser();
removeUser();
displayFirstThree();

const sentence = "Javascript is very interesting and javascript is powerful";
const date = "12-23-2007";
const convertToUpperCase = function () {
  var upperCasedSentence = sentence.toUpperCase();
  console.log(upperCasedSentence);
};
const replaceJavaScript = function () {
  var replacedSentence = sentence
    .replaceAll("javascript", "JS")
    .replace("Javascript", "JS");
  console.log(replacedSentence);
};
const slicedInteresting = function () {
  var slicedOutInteresting = sentence.slice(19, 30);
  var removedInteresting = sentence.replace("interesting", "");
  console.log(slicedOutInteresting);
  console.log(removedInteresting);
};

const splitSentence = function () {
  var splitSentence = sentence.split(" ");
  console.log(splitSentence);
};

const formatDate = function () {
  var formattedDate = date.split("-");
  console.log("formatted date", formattedDate);

  const year = formattedDate[2];
  const month = formattedDate[0];
  const day = formattedDate[1];
  const rightFormat = year + "-" + month + "-" + day;
  ("yyyy-mm-dd");
  console.log("right formatted Date", rightFormat);
};

convertToUpperCase();
replaceJavaScript();
slicedInteresting();
formatDate();
splitSentence();

const products = [
  {
    productName: "iphone15promax",
    price: "12000",
    category: "mobile",
  },
  {
    productName: "airpods",
    price: "28000",
    category: "mobile",
  },
  {
    productName: "iphone14promax",
    price: "120000",
    category: "mobile",
  },
  {
    productName: "iphone13promax",
    price: "120000",
    category: "mobile",
  },
  {
    productName: "iphone12promax",
    price: "134000",
    category: "mobile",
  },
];

const addTwoProducts = function () {
  products.push(
    {
      productName: "Smart Phone",
      price: "200000",
      category: "smart phone",
    },
    {
      productName: "Remote",
      price: "5000",
      category: "household items",
    },
  );

  console.log(products);
};

const removeLastProduct = function () {
  products.pop();
  console.log(products);
};
const addProductsToBeginning = function () {
  products.unshift({
    productName: "Box Office Package",
    price: "200000",
    category: "DSTV",
  });

  console.log(products);
};
const removeFirstProduct = function () {
  products.shift();
  console.log(products);
};
// removeLastProduct();
// addTwoProducts();
// addProductsToBeginning();
// removeFirstProduct();

const convertAllNames = function () {
  const productsNames = products.map((product) => product.productName);
  console.log(productsNames);

  const allNames = productsNames.join(".");
  console.log(allNames);
};

// convertAllNames();

const functionToAccept5Scores = function (
  score1,
  score2,
  score3,
  score4,
  score5,
) {
  const total = score1 + score2 + score3 + score4 + score5;
  console.log(total);
  const average = total / 5;
  console.log(average);

  let grade;
  if (average >= 70) {
    grade = "A";
  } else if (average >= 60) {
    grade = "B";
  } else if (average >= 50) {
    grade = "C";
  } else if (average >= 40) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log(grade);
};

// functionToAccept5Scores(10, 20, 30, 40, 50);

// Accessing HTML Elements from Javascript

// 1. Accessing a single element using the id attribute

const header = document.getElementById("header");

header.innerHTML = "The HTML DOM ";

// 2. Accessing elements tag name

const buttons = document.getElementsByTagName("button");

console.log(buttons);

// buttons[0].textContent = "I am just a button";
Array.from(buttons).forEach(function (btn) {
  if (btn.textContent === "logout") {
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
  }
});

// 3. Accessing elements using class name

const tasks = document.getElementsByClassName("task1");

tasks[0].style.backgroundColor = "lightblue";

// 4. Accessing Elements by Query Selector

const signButton = document.querySelector(".btn-sign");
const unorderedList = document.querySelector("#unordered");

signButton.textContent = " i am the new text for the button";
// unorderedList.style.listStyle = "none";
// unorderedList.style.paddingLeft = "0";

unorderedList.style.display = "flex";
unorderedList.style.gap = "10px";

// 5. Accessing Element By Query Selector All

const signButtons = document.querySelectorAll(".btn-sign");

signButtons[2].textContent = " i am the new text for the button";

const container = document.getElementsByClassName("container");
console.log(container);

// container.forEach(function (container) {
//   container.style.color = "red";
// });
for (let i = 0; i < container.length; i++) {
  container[i].style.color = "red";
  container[i].style.fontSize = "20px";
  container[i].style.backgroundColor = "lightblue";
}
// container.style.color = "red";

//Javascript Event has to do with making things happen
//onclick is used on a button
//onSubmit is used on a form
//onChange  is usede on an input field
//onMouseOver is used when a cursor is movedover an elements
//onMouseOut is used when a cursor is moved out of an elements
//onKeyDown is used when a key is pressed
//onLoad is used when a page is loaded.

function clickFirstBtn() {
  alert("First button clicked");
}

function hideSidebar() {
  const sideBar = document.getElementById("side-bar");
  sideBar.style.display = "none";
  const cancel = document.getElementById("cancel");
  cancel.style.display = "none";
  const hamCont = document.getElementById("ham-cont");
  // hamCont.style.display = "flex";
}
function showSidebar() {
  const sideBar = document.getElementById("side-bar");
  const cancel = document.getElementById("cancel");
  const hamCont = document.getElementById("ham-cont");
  sideBar.style.display = "block";
  cancel.style.display = "block";
  hamCont.style.display = "none";
}

hideSidebar();

const errorText = document.getElementById("error");
errorText.style.color = "red";

const handleSubmit = function (e) {
  e.preventDefault();
  const username = e.target.elements.username.value;
  const password = e.target.elements.password.value;

  // alert("username " + username);
  if (username.length <= 8) {
    // alert("username is 8 characters")
    errorText.textContent = "username is less than 8 characters";
    return;
  }

  if (password.length < 6) {
    errorText.textContent = "Pasword length is less than required";
    return;
  }
  window.location.href = "/index.html";
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
  //   submitBtn.disabled = false;// enable the button
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

firstBtn.addEventListener("click", clickFirstBtn);
firstBtn.addEventListener("click", clickFirstBtn);
firstBtn.addEventListener("click", clickFirstBtn);
const form = document.getElementById("form");

document.addEventListener("change", checkPasswordStrength);
form.addEventListener("submit", handleSubmit);

function handleShowOrHide() {
  const password = document.getElementById("password");
  const eye = document.getElementById("eye");
  // password.type = "text"
  const passwordChange = "changing";

  if (passwordChange === "changing") {
    if (password.type === "password") {
      password.type = "text";
      eye.src = "show.png";
    } else {
      password.type = "password";
      eye.src = "hidden.png";
    }
  }
}

//Java script Timing Events

// Timing Events let you run code:
// - After a Delay
// -Or Repeatedly

// Timing is driven by Timing Events generated by the system clock

//Timmer Functions

// 1 setTimeout()
// 2 setInterval()
// 3 clearTimeout()
// 4 clearInterval()

// The setTimeout() method executes a function after a delay in milliseconds

// setTimeout(function, delay)

const button = document.getElementById("timedBtn");
const loading = document.getElementById("loading");
loading.style.display = "none";
button.addEventListener("click", handleHelloAfterTwoSeconds);

function handleHelloAfterTwoSeconds() {
  //  const textInput = document.getElementById("text-input")
  loading.style.display = "block";
  setTimeout(showMsg, 10000);

  //  textInput.textContent ="Hello"
}

function showMsg() {
  const textInput = document.getElementById("text-input");

  loading.style.display = "none";
  textInput.textContent = "Hello";
}

// The setInterval() method that calls a function repeatedly
// setInterval(fucntion,1000)

const btnStart = document.getElementById("start");
const counter = document.getElementById("counter");
let countNumber = 0;

let interval;
// btnStart.addEventListener("click", handleCount);
handleCount();

function handleCount() {
  interval = setInterval(count, 1);
}

function count() {
  countNumber++;

  counter.textContent = countNumber + "+";

  if (countNumber === 2000) {
    clearInterval(interval);
  }
}

// clearInterval
// clearInterval is used to stop a running inteval. It takes an interval as parameter or argument

const btnStop = document.getElementById("stop");

btnStop.addEventListener("click", stopCount);

function stopCount() {
  var name2 = "Ade";
  clearInterval(interval);
  return;
}
console.log(name2);
