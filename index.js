let output = "";
let operator = null;
let calculatedResult = null;
let num1 = null;
let num2 = null;
let decimalClicked = false;
let minusClikced = false;

// calculate function

function calculate(num1, num2, operator) {
  if (num1 && num2 && operator !== null) {
    switch (operator) {
      case "+":
        calculatedResult = num1 + num2;
        break;
      case "-":
        calculatedResult = num1 - num2;
        break;
      case "*":
        calculatedResult = num1 * num2;
        break;
      case "/":
        if(num2 !== 0){
          calculatedResult = num1 / num2;
        }else{
          calculatedResult = 0;
          display.textContent = 'Seriouslyy 😑';
        }
 
        break;
      case "%":
        calculatedResult = (num1 / 100) * num2;
        break;
    }
  }
}

// display
const display = document.querySelector(".display");
display.textContent = 0;

// decimal
const decimal = document.querySelector(".decimal-button");
decimal.addEventListener("click", () => {
  if (output === "") {
    output += "0.";
    decimalClicked = true;
  } else if (!decimalClicked) {
    output += ".";
    decimalClicked = true;
  }

  display.textContent = output;
});

// minus-button
const minusValue = document.querySelector(".minus-value-button");
minusValue.addEventListener("click", () => {

if(minusClikced === false && output !== ''){
    output = "-" + output;
    minusClikced = true;
    display.textContent = output;
  }
 
});

// using queryselectoall to get all number buttons
const numericButtons = document.querySelectorAll(".numeric-button");
numericButtons.forEach((button) => {
  button.addEventListener("click", () => {
    output += button.textContent;
    display.textContent = output;
  });
});

// clear-button
const clear = document.querySelector(".clear-button");
clear.addEventListener("click", () => {
  output = "";
  num1 = null;
  num2 = null;
  calculatedResult = null;
  display.textContent = 0;
});

// operator buttons
const operatorButtons = document.querySelectorAll(".operator-buttons");
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.textContent;

    minusClikced = false;
    decimalClicked = false;

    if (num1 === null) {
      num1 = Number(output);
      output = "";
    } else {
      if (calculatedResult !== null) {
        num1 = calculatedResult;
        num2 = Number(output);
        calculate(num1, num2, operator);
        display.textContent = calculatedResult;
        num1 = calculatedResult;
        output = "";
      } else {
        num2 = Number(output);
        calculate(num1, num2, operator);
        display.textContent = calculatedResult;
        num1 = calculatedResult;
        output = "";
      }
    }
    console.log("operator: ", operator);
    console.log("calculated result: ", calculatedResult);

    console.log("num1:", num1);
    console.log("num2: ", num2);
  });
});

// equal button

const equal = document.querySelector(".equal-button");
equal.addEventListener("click", () => {
 
  minusClikced = false;
  decimalClicked = false;
 
  num2 = Number(output);
  calculate(num1, num2, operator);
  display.textContent = calculatedResult;
  num1 = calculatedResult;
  output = "";
});
