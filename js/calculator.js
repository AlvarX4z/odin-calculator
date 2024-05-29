const EMPTY_STRING_VALUE = "";
const REG_EX = /^[0-9]+(\+|\/|\-|\*)[0-9]+$/;
const REG_EX_NUM_1 = /^[0-9]+/;
const REG_EX_NUM_2 = /[0-9]+$/;
const REG_EX_OPERATOR = /[\+|\/|\-|\*]/;

const DISPLAY = document.getElementById("display");

let displayValue = "";

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
  let result;
  switch (operator) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      alert("Invalid math operation.");
      clearDisplay();
      break;
  }
  DISPLAY.innerHTML = result;
  displayValue = result;
}

function concatenateDisplay(character) {
  DISPLAY.innerHTML = displayValue += character;
}

function validateOperation(operation) {
  if (operation.match(REG_EX)) {
    const num1 = parseInt(operation.match(REG_EX_NUM_1));
    const num2 = parseInt(operation.match(REG_EX_NUM_2));
    const operator = operation.match(REG_EX_OPERATOR)[0];
    operate(operator, num1, num2);
  } else {
    DISPLAY.innerHTML = "Invalid math operation";
  }
}

function clearDisplay() {
  DISPLAY.innerHTML = EMPTY_STRING_VALUE;
  displayValue = EMPTY_STRING_VALUE;
}

const keys = document.querySelectorAll(".key");
keys.forEach((button) =>
  button.addEventListener("click", () => concatenateDisplay(button.innerHTML))
);

const equalsKey = document.getElementById("equals");
equalsKey.addEventListener("click", function () {
  validateOperation(DISPLAY.innerHTML);
});

const clearKey = document.getElementById("clear");
clearKey.addEventListener("click", function () {
  const emptyValue = "";
  clearDisplay();
});
