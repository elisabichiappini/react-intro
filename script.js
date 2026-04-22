'use strict';
console.log('ciao');

const btn = document.getElementById('crea');
const numberList = document.querySelector('.numbers');
const total = document.querySelector('.total');

let count = 0;
const numberListArray = [];

const updateDOM = () => {
    total.innerText = String(count);
    numberList.innerHTML = '';
    numberListArray.forEach(number => {
        numberList.innerHTML += `<div class="number">${number}</div>`;
    });
}

btn.addEventListener('click', function() {
    const randomNumber = Math.ceil(Math.random() * 99);
    numberListArray.push(randomNumber);
    count ++;
    updateDOM();
});