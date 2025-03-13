let firstNumber = null;
let secondNumber = null;
let operator = null;
let calculationFinished = false;
let display = document.querySelector("#calculator-display");

Array.from(document.getElementsByClassName("number")).forEach(digit => {
	digit.addEventListener("click", function () {
		getNumber(digit.textContent);
	});
});

Array.from(document.getElementsByClassName("operator")).forEach(digit => {
	digit.addEventListener("click", function () {
		handleOperator(digit.textContent);
	});
});

document.getElementById("equal").addEventListener("click", handleEqual);
document.getElementById("c").addEventListener("click", handleClear);
document.getElementById("ce").addEventListener("click", handleBackspace);

function getNumber(number) {
    if (display.textContent == "0" || operatorClicked || calculationFinished) {
        display.textContent = "";
        operatorClicked = false;
		calculationFinished = false;
    }
    display.textContent += number;
}

let operatorClicked = false;

function handleOperator(op) {
    if (firstNumber === null) {
        firstNumber = parseFloat(display.textContent);
		console.log("First number set:", firstNumber);
    } else if (!operatorClicked) {
        secondNumber = parseFloat(display.textContent);
		firstNumber = calculate(firstNumber, secondNumber, operator);
		console.log("Second number set:", secondNumber);
		display.textContent = firstNumber;
    }
    operator = op;
    operatorClicked = true;
	calculationFinished = false;
}

function handleEqual() {
    if (firstNumber !== null && operator) {
        secondNumber = parseFloat(display.textContent);
        display.textContent = calculate(firstNumber, secondNumber, operator);
        firstNumber = parseFloat(display.textContent);
        secondNumber = null;
        operator = null;
        calculationFinished = true;
    }
}

function calculate(num1, num2, op) {
    switch (op) {
        case "+": return num1 + num2;
        case "-": return num1 - num2;
        case "*": return num1 * num2;
        case "/": return num2 !== 0 ? num1 / num2 : "Error";
        default: return num2;
    }
}

function handleClear() {
    display.textContent = "0";
    firstNumber = null;
    secondNumber = null;
    operator = null;
    calculationFinished = false;
}

function handleBackspace() {
    display.textContent = display.textContent.slice(0, -1) || "0";
}

document.getElementById("c").addEventListener("click", function() {
    display.textContent = "0";
    firstNumber = null;
    secondNumber = null;
    operator = null;
});

document.addEventListener("keydown", (event) => {
    let key = event.key;

    if (!isNaN(key)) {
        getNumber(key); // If key is a number (0-9)
    } else if (["+","-","*","/"].includes(key)) {
        handleOperator(key); // If key is an operator
    } else if (key === "Enter" || key === "=") {
        handleEqual(); // Enter or = triggers calculation
    } else if (key === "Escape") {
        handleClear(); // ESC clears calculator
    } else if (key === "Backspace") {
        handleBackspace(); // Backspace deletes last digit
    }
});
