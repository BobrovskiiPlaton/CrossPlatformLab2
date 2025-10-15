import {MiniMaple} from './miniMaple.js';

document.addEventListener('DOMContentLoaded', setup)

function setup() {
    document.getElementById('diffButton').onclick = calculateDerivative;
}

function calculateDerivative() {
    const func = document.getElementById('functionInput').value;
    const variable = document.getElementById('variableInput').value;
    const resultDiv = document.getElementById('result');
    
    try {
        const derivative = MiniMaple.differentiate(func, variable);
        resultDiv.innerHTML = `Derivative: ${derivative}`;
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
}