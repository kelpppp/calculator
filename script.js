function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".text")

let buttonsArr = [];

let previousValue = "";
let currentValue = "";
let operator = "";
let operatorPressed = false;
let currentInput = "";
let previousButton = "";

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        // when "clear" is pressed
        if (button.textContent === "clear") {
            previousValue = "";
            currentValue = "";
            operator = "";
            operatorPressed = false;
            currentInput = "";
            display.textContent = "0";
            previousButton = "";
        }
        // when "=" is pressed
        else if (button.textContent === "=") {
            currentInput = display.textContent;
            previousValue = currentValue;
            currentValue = operate(Number(previousValue), Number(currentInput), operator);
            display.textContent = currentValue;
            operatorPressed = false;
            previousButton = "=";
            console.log(`=: previousValue: ${previousValue}; currentValue: ${currentValue}`);
        }
        // when a digit is pressed
        else if (Number.isInteger(Number(button.textContent))) {
            if (operatorPressed) {
                currentInput = button.textContent;
                display.textContent = currentInput;
                operatorPressed = false;
                console.log(`another num: ${currentInput}`);
                previousButton = "";
            } else {
                if (previousButton === "=") {
                    previousValue = "";
                    currentValue = "";
                    currentInput = "";
                    currentInput = button.textContent;
                    console.log(`first num: ${currentInput}`);
                    display.textContent = currentInput;
                    previousButton = "";
                } else {
                    currentInput += button.textContent;
                    console.log(`first num: ${currentInput}`);
                    display.textContent = currentInput;
                    previousButton = "";
                }  
            }
        } 
        // when operator is pressed
        else {
            // operator = button.textContent;
            // if (previousValue === "") {
            //     (operator === "*" || operator === "/") ? previousValue = 1 : previousValue = 0;
            // } else {previousValue = display.textContent};

            // currentValue === "" ? currentValue = currentInput : currentValue;
            // console.log(currentValue);
            // operatorPressed = true;
            // currentValue = operate(Number(previousValue), Number(currentValue), operator);
            // display.textContent = currentValue;
            // console.log(`operator: ${operator}; previousValue: ${previousValue}; currentInput: ${currentInput}; currentValue: ${currentValue}`);
            if (previousValue === "" || previousButton === "=") {
                operator = button.textContent;
                previousValue = display.textContent;
                currentValue === "" ? currentValue = currentInput : currentValue;
                operatorPressed = true;
                console.log(currentValue);
                console.log(`operator 1: ${operator}; previousValue: ${previousValue}; currentInput: ${currentInput}; currentValue: ${currentValue}`);
                previousButton = "";
            } else {
                currentInput = display.textContent
                previousValue = currentValue;
                operatorPressed = true;
                console.log(currentValue);
                currentValue = operate(Number(previousValue), Number(currentInput), operator);
                display.textContent = currentValue;
                previousButton = "";
                operator = button.textContent;
                console.log(`operator 2: ${operator}; previousValue: ${previousValue}; currentInput: ${currentInput}; currentValue: ${currentValue}`);

            };

        }
    });
});
