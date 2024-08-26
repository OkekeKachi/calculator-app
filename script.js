
let displayValue = '0';
let history = '';
let errorState = false;

const displayElement = document.getElementById('display');
const historyElement = document.getElementById('history');

function updateDisplay() {
    displayElement.innerText = displayValue;
    }

function updateHistory() {
    historyElement.innerText = history;
    }

function clearDisplay() {
    displayValue = '0';
errorState = false;
updateDisplay();
    }

function deleteLastCharacter() {
        if (errorState) {
    clearDisplay();
        } else {
            if (displayValue.length > 1) {
    displayValue = displayValue.slice(0, -1);
            } else {
    displayValue = '0';
            }
updateDisplay();
        }
    }

function appendNumber(number) {
        if (displayValue === '0') {
    displayValue = number.toString();
        } else {
    displayValue += number.toString();
        }
errorState = false;
updateDisplay();
    }

function appendOperator(operator) {
        if (displayValue !== '0') {
    displayValue += ' ' + operator + ' ';
errorState = false;
updateDisplay();
        }
    }

function calculate() {
        try {
    let result = eval(displayValue);
history = `${displayValue} = ${result}`;
displayValue = result.toString();
errorState = false;
        } catch (error) {
    displayValue = 'Error';
errorState = true;
        }
updateDisplay();
updateHistory();
    }