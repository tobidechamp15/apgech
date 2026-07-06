# JavaScript Fundamentals — Assessment

**Time:** 75 minutes  **Total:** 100 marks

**Instructions:** Answer all questions. For output questions, write exactly what the console prints, in order. Show your working where asked.

---

## Section A — Operators & Precedence (20 marks)

**A1.** (4 marks)

```javascript
let amount = 15000;
let rate = amount >= 10000 ? 30 : amount > 20000 ? 20 : 10;
```

State the value of `rate`. State what rate an amount of `25000` produces. Comment on whether the expression behaves as the author intended, and rewrite it if it does not.

**A2.** (4 marks) State the output:

```javascript
let n = 2;
console.log(--n);
console.log(n--);
console.log(n);
```

**A3.** (4 marks) Evaluate, showing each step:

```javascript
let result = 3 + 2 * 4 - 10 % 3;
```

**A4.** (4 marks) State what each line prints, and justify each:

```javascript
console.log(3 !== "3");
console.log(3 != "3");
console.log(3 === 3.0);
console.log("5" + 4 - 2);
```

**A5.** (4 marks) Explain the difference between a unary, binary, and ternary operator. Give one example of each using real JavaScript syntax.

---

## Section B — Type System & Coercion (16 marks)

**B1.** (4 marks) Predict the output of each line, and account for anything surprising:

```javascript
var arr = ["ere", "oko"];
console.log(typeof arr);
console.log(typeof null);
console.log(typeof function () {});
console.log(typeof NaN);
```

**B2.** (6 marks) For each, state `true` or `false` and justify in one line:

```javascript
console.log(0 == false);
console.log("" == false);
console.log(null == undefined);
console.log(null === undefined);
console.log([] == false);
console.log(NaN == NaN);
```

**B3.** (6 marks) Evaluate the following input check from a loan form. Identify any problems with it, describe an input that would cause incorrect behaviour, and provide a corrected version.

```javascript
let amountEntered = parseInt(amount.value);
if (amount.value < 1000) {
  error.textContent = "Enter amount!";
  return;
}
```

---

## Section C — Functions (20 marks)

**C1.** (5 marks) Evaluate this function. State whether every line runs, and explain.

```javascript
function addition(num1, num2) {
  const sum = num1 + num2;
  return sum;
  console.log(sum);
}
```

**C2.** (6 marks) Trace this function for an input of `4`:

```javascript
function factorial(num) {
  if (num == 0) return 0;
  else if (num == 1) return 1;
  else {
    let result = num;
    while (num > 1) {
      result = result * (num - 1);
      num--;
    }
    return result;
  }
}
console.log(factorial(4));
```

Show the values of `result` and `num` after each iteration of the loop. State whether `factorial(0)` gives a mathematically correct answer, and justify.

**C3.** (5 marks) Explain the difference between a function that performs an action and one that returns a value. Classify each of the following:

```javascript
function a() { return "Ade"; }
function b(x) { document.getElementById("out").textContent = x; }
function c(x, y) { const s = x + y; return s; }
```

**C4.** (4 marks) State what `parseInt("30px")`, `parseInt("px30")`, and `parseInt("")` each return, and explain why this behaviour matters when validating a form input field.

---

## Section D — Objects, Arrays & Built-ins (24 marks)

**D1.** (6 marks)

```javascript
const providers = [
  "Prepaid Meter IBEDC",
  "Postpaid Meter IBEDC",
  "Prepaid Meter IKDC",
  "Postpaid Meter IKDC",
];
const result = providers.filter(function (p) {
  return p.startsWith("Postpaid");
});
```

State the exact contents of `result`. Rewrite the `filter` callback as an arrow function. State what `filter` returns when no element matches.

**D2.** (6 marks) Trace the output:

```javascript
const fan = new String("I am a fan");
console.log(fan.charAt(3));
console.log(fan.endsWith("fan"));
console.log(fan.startsWith("fan"));
console.log(typeof fan);
console.log(typeof "I am a fan");
```

Account for any difference between the last two lines.

**D3.** (4 marks) State each output:

```javascript
var number = 123.64;
console.log(Math.floor(number));
console.log(Math.round(number));
console.log(Math.ceil(number));
console.log(Math.trunc(-4.7));
```

Explain the difference between `Math.floor` and `Math.trunc`, referring to the negative example.

**D4.** (4 marks)

```javascript
const regexNumber = /^\d+$/;
```

Explain what `^`, `\d`, `+`, and `$` mean. State which of these strings the pattern matches: `"1234"`, `"12.34"`, `"0012"`, `""`, `" 12"`.

**D5.** (4 marks) Categorise each of the following as a Built-in object, a Browser (host) object, or an HTML/DOM object: `Math`, `document`, `String`, `window`, `navigator`, an element returned by `getElementById`.

---

## Section E — Debugging & Applied Reasoning (20 marks)

**E1.** (6 marks) An object has both a `hobby` and a `height` property. A function contains:

```javascript
height.innerHTML = userObj.hobby;
```

State what will be displayed in the height field, explain whether this is correct, and state what was likely intended.

**E2.** (8 marks) This loop is meant to count from 0 to 8. Evaluate whether it does so. Identify any problems and write a correct version.

```javascript
for (let i; i++; i < 9) {
  console.log("incremented i", i);
}
```

**E3.** (6 marks) A student writes the following, expecting it to log `"Eligible"`:

```javascript
let sum = 2;
let isEligible = sum >= 8 ? "Eligible" : "Not Eligible";
let notEligible = !isEligible;
console.log(notEligible);
```

State what `notEligible` actually logs and explain why. Identify the misconception this reveals.

---

## Bonus (5 marks — no partial credit)

State the output of each line and explain the mechanism behind it:

```javascript
console.log([] + []);
console.log([] + {});
console.log(typeof (typeof 1));
```

---

**End of assessment.**
