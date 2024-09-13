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
display.textContent = 0;

// getting all the numeric button nodes

const decimal = document.querySelector(".decimal-button");
const minusValue = document.querySelector(".minus-value-button");

// using queryselectoall
const numericButtons = document.querySelectorAll(".numeric-button");
numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    output += button.textContent;
    display.textContent = output;
  });
});

decimal.addEventListener("click", () => {
  output += ".";
  display.textContent = output;
});
minusValue.addEventListener("click", () => {
  output = "-" + output;
  display.textContent = output;
});

// clear-button
const clear = document.querySelector(".clear-button");
clear.addEventListener("click", () => {
  output = "";
  num1 = "";
  num2 = "";
  display.textContent = 0;
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
