// Define Variables
// Get the display element and set operands to empty strings
const display = document.getElementById('display');
let currentOperand = "";
let previousOperand = "";
let operation = "";

// Define Functions

// update display
function updateDisplay() {
    display.value = currentOperand;
}

// append number to currentOperand
function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

// set chosen operand and reset current
function chooseOperation(op) {
    previousOperand = currentOperand;
    currentOperand = "";
    operation = op;
}

// calculate result
function calculate() {
    let result;
    switch (operation) {
        case '+':
            // What happens if the case is true
            result = parseFloat(previousOperand) + parseFloat(currentOperand);
            break;
        case '-':
            result = parseFloat(previousOperand) - parseFloat(currentOperand);
            break;
        case 'x':
            result = parseFloat(previousOperand) * parseFloat(currentOperand);
            break;
        case '/':
            result = parseFloat(previousOperand) / parseFloat(currentOperand);
            break;
    }
    currentOperand = result.toString();
    updateDisplay();
}

// event listeners

document.querySelectorAll('.number').forEach(function (button) {
    button.addEventListener('click', function () {
        appendNumber(button.textContent);
    });
});

// getting the operators
document.querySelectorAll('.operator').forEach(function (button) {
    button.addEventListener('click', function () {
        appendNumber(button.textContent);
        chooseOperation(button.textContent);
    });
});

// clear button

document.getElementById("clear").addEventListener("click", function () {
    currentOperand = "",
    previousOperand = "",
    operation = "";
    updateDisplay();
});

// decimal button
document.getElementById("decimal").addEventListener("click", function () {
    if (!currentOperand.includes('.')) {
        appendNumber('.');
    }
});

// calculate button
document.getElementById("calculate").addEventListener("click", function () {
    calculate();
});