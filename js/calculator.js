function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    default:
      alert("Invalid math operation.");
      break;
  }
}

function concatenateDisplay(character) {
  const display = document.getElementById("display");
  display.innerHTML = displayValue += character;
}

let operator;
let num1;
let num2;
let displayValue = '';

operate("*", 5, 5);

const keys = document.querySelectorAll(".key");
keys.forEach((button) =>
  button.addEventListener("click", () => concatenateDisplay(button.innerHTML))
);
