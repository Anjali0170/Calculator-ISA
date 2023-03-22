const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const output = document.getElementById("output");

let currentValue = "";
let operator = "";
let result = 0;

for (let button of buttons) {
  button.addEventListener("click", handleButton);
}

function handleButton(event) {
  const buttonValue = event.target.value;
  if (!isNaN(buttonValue)) {
    // Button is a number
    currentValue += buttonValue;
    display.value = currentValue;
  } else {
    switch (buttonValue) {
      case "+":
      case "-":
      case "*":
      case "/":
        // Button is an operator
        if (currentValue !== "") {
          result = applyOperation(operator, result, parseFloat(currentValue));
          operator = buttonValue;
          currentValue = "";
        }
        break;
      case "=":
        // Button is the equals command
        if (currentValue !== "") {
          result = applyOperation(operator, result, parseFloat(currentValue));
          operator = "";
          currentValue = "";
          display.value = result;
        }
        break;
      case "C":
        // Button is the clear command
        currentValue = "";
        operator = "";
        result = 0;
        display.value = "";
        break;
      default:
        output.textContent = "Invalid button: " + buttonValue;
    }
  }
}

function applyOperation(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return operand1 + operand2;
    case "-":
      return operand1 - operand2;
    case "*":
      return operand1 * operand2;
    case "/":
      return operand1 / operand2;
    default:
      return operand2;
  }
}
