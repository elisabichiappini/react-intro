'use strict';
console.log('ciao');

const btn = document.getElementById('crea');
const numberList = document.querySelector('.numbers');
const total = document.querySelector('.total');

let count = 0;
const numberListArray = [];

const removeNumber = (index) => {
    numberListArray.splice(index, 1);
    count --;
    updateDOM();
}

const updateDOM = () => {
    total.innerText = String(count);
    numberList.innerHTML = '';
    numberListArray.forEach((number, i) => {
        numberList.innerHTML += `<div class="number" onclick="removeNumber(${i})">${number}</div>`;
    });
}

btn.addEventListener('click', function() {
    const randomNumber = Math.ceil(Math.random() * 99);
    numberListArray.push(randomNumber);
    count ++;
    updateDOM();
});