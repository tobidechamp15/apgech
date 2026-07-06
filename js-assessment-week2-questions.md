# JavaScript Assessment - Week 2

## Instructions
- **Duration:** 45 minutes
- **Total Marks:** 25
- **Read all questions carefully before answering**
- **Write clean, readable code with proper syntax**
- **Show your working for calculation questions**

---

## Section A: Multiple Choice Questions (5 Marks)
*Circle the correct answer. Each question carries 1 mark.*

**1. What will be the output of the following code?**
```javascript
let x = 5;
console.log(x++);
console.log(x);
```
a) 5, 5
b) 5, 6
c) 6, 6
d) 6, 5

---

**2. What is the result of `"5" + 3` in JavaScript?**
a) 8
b) "53"
c) Error
d) 53

---

**3. Which of the following is NOT a valid JavaScript operator?**
a) `===`
b) `&&`
c) `:=`
d) `??`

---

**4. The ternary operator `condition ? expr1 : expr2` is considered a:**
a) Unary operator
b) Binary operator
c) Ternary operator
d) Assignment operator

---

**5. What does `typeof []` return?**
a) "array"
b) "object"
c) "undefined"
d) "list"

---

## Section B: True or False (5 Marks)
*Write TRUE or FALSE for each statement. Each question carries 1 mark.*

**6.** The expression `3 + "3"` results in `6`.

---

**7.** `null` and `undefined` are strictly equal (`===`).

---

**8.** In JavaScript, `0` is considered `false` in a boolean context.

---

**9.** The `%` operator returns the quotient of division.

---

**10.** `let` variables cannot be redeclared in the same scope.

---

## Section C: Short Answer Questions (15 Marks)
*Write your answers in the space provided.*

---

**11. Operator Precedence & Execution (3 Marks)**

Evaluate the following expression step by step, showing your working:

```
(2 + 3 * 4) / (5 - 2) + 1
```

---

**12. Logic and Conditionals (3 Marks)**

Given the following code, what will be the value of `status` and why? Explain your reasoning.

```javascript
let score = 75;
let status = score >= 70 ? "Pass" : score >= 50 ? "Retake" : "Fail";
```

---

**13. String Methods (3 Marks)**

Write a function called `isValidEmail` that:
- Takes an email string as a parameter
- Returns `true` if the email contains `@` and ends with `.com`
- Returns `false` otherwise

---

**14. Loan Calculator (3 Marks)**

You have the following loan calculator code. Identify and fix **THREE** bugs in the code:

```javascript
function calculateLoan() {
    const amount = document.getElementById("loanAmount");
    const error = document.getElementById("error");
    let amountEntered = amount.value;
    
    if (amountEntered < 1000) {
        error.textContent = "Amount too low!";
        error.style.padding = "20px";
        return;
    }
    
    let interestRate = amountEntered >= 10000 ? 30 : amountEntered > 20000 ? 20 : 10;
    
    const interest = amountEntered * (interestRate / 100);
    const total = amountEntered + interest;
    
    const rate = document.getElementById("rate");
    rate.textContent = total;
}
```

---

**15. Function Composition (3 Marks)**

Write a function `calculateBMI` that:
- Takes height (in cm) and weight (in kg) as parameters
- Calculates BMI using the formula: `weight / (height/100)^2`
- Returns a string with the BMI category:
  - "Underweight" if BMI < 18.5
  - "Normal" if BMI 18.5-24.9
  - "Overweight" if BMI 25-29.9
  - "Obese" if BMI >= 30

---

## Section D: Bonus Challenge (Optional) (2 Marks)

**16. Advanced Problem**

Write a function `calculateFactorial` that:
- Takes a number as a parameter
- Returns the factorial using **recursion** (not loops)
- Handles edge cases (negative numbers, 0, 1)

---

## End of Assessment

### Marking Scheme

| Section | Total Marks |
|---------|-------------|
| A: Multiple Choice | 5 |
| B: True or False | 5 |
| C: Short Answer | 15 |
| D: Bonus Challenge | 2 (optional) |
| **Total** | **27** |

### Good Luck! 🍀
