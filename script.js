const numberButtons = document.querySelectorAll('[data-num]')
const clearButton = document.querySelector('[data-clear]')
const invertButton = document.querySelector('[data-plusMinus]')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalButton = document.querySelector('[data-equal]')
const allButtons = document.querySelectorAll('.button')
const percentButton = document.querySelector('[data-percent]')

let firstOperand = ''
let secondOperand = ''
let operator = ''



function add(num1, num2) {
    return num1 + num2
}

function multiply(num1,num2) {
    return num1 * num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function divide(num1, num2) {
    if (num2 === 0) {
        return 'error'
    }
    return num1 / num2
}

function operate(operator, num1, num2) {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    console.log(typeof(num1))
    switch (operator) {
        case '+':
            return document.querySelector('.screen').textContent = add(num1,num2)
        case '-':
            return document.querySelector('.screen').textContent = subtract(num1,num2)
        case '/':
            return document.querySelector('.screen').textContent = divide(num1,num2)
        case '*':
            return document.querySelector('.screen').textContent = multiply(num1,num2)
    }
}

function addToScreen(number) {
    document.querySelector('.screen').textContent += number
}

allButtons.forEach(function(button) {
    button.addEventListener('mouseover', function(e) {
        e.target.style.filter = 'brightness(0.5)'
    })
    button.addEventListener('mouseout', function(e) {
        e.target.style.filter = 'brightness(1)'
    })
})

invertButton.addEventListener('click', () => document.querySelector('.screen').textContent *= -1)

percentButton.addEventListener('click', () => document.querySelector('.screen').textContent /= 100)

clearButton.addEventListener('click', function() {
    document.querySelector('.screen').textContent = ''
    firstOperand = ''
    secondOperand = ''
    operator = ''
})

equalButton.addEventListener('click', function() {  
    secondOperand = document.querySelector('.screen').textContent
    operate(operator, firstOperand, secondOperand)
})

numberButtons.forEach(function(button) {
    button.addEventListener('click', () => addToScreen(button.textContent))
})



operatorButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        if (operator ===  button.textContent) { //if user presses an operator sign again without adding another number
            secondOperand = document.querySelector('.screen').textContent
            operate(operator, firstOperand, secondOperand)
        }
        else if (!firstOperand) {
            operator = button.textContent
            firstOperand = document.querySelector('.screen').textContent //for the very first input of numbers
            document.querySelector('.screen').textContent = ''   
        }
        else {
            operator = button.textContent
            firstOperand = document.querySelector('.screen').textContent  //takes the number from the screen  and assign it to the first variable
            document.querySelector('.screen').textContent = ''  
        } 
    })
})




