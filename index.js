let output = 0;

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

// event listener for numeric buttons

one.addEventListener("click", () => {
  output = 1;
  display.textContent = output;
});
