import {MiniMaple} from './miniMaple.js';

document.addEventListener('DOMContentLoaded', setup)

function setup() {
    document.getElementById('demoButton').onclick = addSomething;
    document.getElementById('diffButton').onclick = calculateDerivative;
}

function addSomething(){
    const someDummyDiv = document.createElement('div');
    someDummyDiv.classList.add('generated');
    const count = document.getElementsByClassName('generated').length;
    someDummyDiv.innerHTML = `I was created by JS! There are already ${count} of my friends!`;
    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
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