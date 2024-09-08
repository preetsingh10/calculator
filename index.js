let output = "";
let operator = "";
let calculatedResult;
let num1;
let num2;

// operator functions

function add(num1, num2) {
  return num1 + num2;
}
function subtraction(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function percentage(num1, num2) {
  return (num1 / 100) * num2;
}

// display
const display = document.querySelector(".display");
display.textContent = output;

// getting all the numeric button nodes

const one = document.querySelector(".one-button");
const two = document.querySelector(".two-button");
const three = document.querySelector(".three-button");
const four = document.querySelector(".four-button");
const five = document.querySelector(".five-button");
const six = document.querySelector(".six-button");
const seven = document.querySelector(".seven-button");
const eight = document.querySelector(".eight-button");
const nine = document.querySelector(".nine-button");
const zero = document.querySelector(".zero-button");
const decimal = document.querySelector(".decimal-button");
const minusValue = document.querySelector(".minus-value-button");

// event listener for numeric buttons

one.addEventListener("click", () => {
  output += "1";
  display.textContent = output;
});

two.addEventListener("click", () => {
  output += "2";
  display.textContent = output;
});
three.addEventListener("click", () => {
  output += "3";
  display.textContent = output;
});

four.addEventListener("click", () => {
  output += "4";
  display.textContent = output;
});
five.addEventListener("click", () => {
  output += "5";
  display.textContent = output;
});

six.addEventListener("click", () => {
  output += "6";
  display.textContent = output;
});
seven.addEventListener("click", () => {
  output += "7";
  display.textContent = output;
});

eight.addEventListener("click", () => {
  output += "8";
  display.textContent = output;
});
nine.addEventListener("click", () => {
  output += "9";
  display.textContent = output;
});

zero.addEventListener("click", () => {
  output += "0";
  display.textContent = output;
});

decimal.addEventListener("click", () => {
  output += ".";
  display.textContent = output;
});
minusValue.addEventListener("click", () => {
  output = "-" + output;
  display.textContent = output;
});

// clear-button node
const clear = document.querySelector(".clear-button");
// clear button event listener
clear.addEventListener("click", () => {
  output = "";
  num1 = "";
  num2 = "";
  display.textContent = output;
});

// operator buttons

// plus button
const plusButton = document.querySelector(".plus-button");
plusButton.addEventListener("click", () => {
  operator = "+";
  num1 = Number(output);
  output = "";
});
// minus button
const minusButton = document.querySelector(".minus-button");
minusButton.addEventListener("click", () => {
  operator = "-";
  num1 = Number(output);
  output = "";
});
// multiply button
const multiplyButton = document.querySelector(".multiply-button");
multiplyButton.addEventListener("click", () => {
  operator = "*";
  num1 = +output;
  output = "";
});
// divide button
const divideButton = document.querySelector(".divide-button");
divideButton.addEventListener("click", () => {
  operator = "/";
  num1 = +output;
  output = "";
});
// percentage button
const percentageButton = document.querySelector(".percentage-button");
percentageButton.addEventListener("click", () => {
  operator = "%";
  num1 = +output;
  output = "";
});

// equal button

const equal = document.querySelector(".equal-button");
equal.addEventListener("click", () => {
  if (operator === "+") {
    display.textContent = "";
    num2 = Number(output);
    calculatedResult = add(num1, num2);
    display.textContent = calculatedResult;
    num1 = calculatedResult;

    output = "";
  } else if (operator === "-") {
    display.textContent = "";
    num2 = Number(output);

    calculatedResult = subtraction(num1, num2);
    display.textContent = calculatedResult;
    num1 = calculatedResult;

    output = "";
  } else if (operator === "*") {
    display.textContent = "";
    num2 = Number(output);
    calculatedResult = multiply(num1, num2);
    display.textContent = calculatedResult;
    num1 = calculatedResult;

    output = "";
  } else if (operator === "/") {
    display.textContent = "";
    num2 = Number(output);
    calculatedResult = divide(num1, num2);
    display.textContent = calculatedResult;
    num1 = calculatedResult;

    output = "";
  } else if (operator === "%") {
    display.textContent = "";
    num2 = Number(output);
    calculatedResult = percentage(num1, num2);
    display.textContent = calculatedResult;
    num1 = calculatedResult;

    output = "";
  }
});
