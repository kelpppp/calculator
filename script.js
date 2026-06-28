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

// let num1 = 0;
// let num2 = 0;
// let operator = "";
// let num1Start = false;
// let num1In = false;
// let operatorIn = false;
// let num2Start = false;
// let num2In = false;

// const buttons = document.querySelectorAll("button");
// const display = document.querySelector(".text")

// let buttonsArr = [];

// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         if (Number.isInteger(Number(button.textContent))) {
            
//             if (num1In && operatorIn) {
//                 display.textContent = button.textContent;
//                 num2 = Number(button.textContent);
//                 num2In = true;
//             } else {
//                 display.textContent = button.textContent;
//                 num1 = Number(button.textContent);
//                 num1In = true;
//             }
//         } else {
//             if (!operatorIn && num1In) {
//                 operator = button.textContent;
//                 operatorIn = true;
//             } else if (num2In && !button.textContent === "=") {
//                 display.textContent = operate(num1, num2, operator);
//                 num1In = true;
//                 num2In = false;
//                 operatorIn = true;

//                 num1 = operate(num1, num2, operator);
//                 num2 = 0;
//                 operator = button.textContent;
//             } else {
//                 display.textContent = operate(num1, num2, operator);
//                 num1In = true;
//                 num2In = false;
//                 operatorIn = false;

//                 num1 = operate(num1, num2, operator);
//                 num2 = 0;
//             }
//         }
        
//     })
// });

let num1 = 0;
let num2 = 0;
let operator = "";
let num1Start = false;
let num1In = false;
let operatorIn = false;
let num2Start = false;
let num2In = false;

const buttons = document.querySelectorAll("button");
const display = document.querySelector(".text")

let buttonsArr = [];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // if number is pressed
        if (Number.isInteger(Number(button.textContent))) {
            
            if (operatorIn && num2Start) {
                display.textContent = button.textContent;
                num2Start = true;
                console.log("num2 started");
            } else if (!num1Start) {
                display.textContent = button.textContent;
                num1Start = true;
                console.log("num 1 started");
            } else {
                display.textContent += button.textContent;
            }
           
        } 
        // if operator is pressed
        else if (button.textContent !== "=") {

            if (num1Start) {
                console.log("operator - num1 start = true")
                num1In = true;
                num1 = Number(display.textContent);
                operator = button.textContent;
                operatorIn = true;
                num1Start = false;
                num2Start = true;
            } else if (num2Start) { // num2Start = true:
                console.log("operator - num2 start = true")
                num2 = Number(display.textContent);
                display.textContent = operate(num1, num2, button.textContent);
                num1 = Number(display.textContent);
                operator = button.textContent;
                num1In = true;
                operatorIn = true;
            } 
            
        } else {
            console.log("= clicked")
            num2 = Number(display.textContent);
            display.textContent = operate(num1, num2, operator);
            num1In = true;
            operatorIn = false;
            num1Start = true;

            num1 = Number(display.textContent);
        }
        
    })
});
