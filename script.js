'use strict';
console.log('ciao');

const btn = document.getElementById('crea');
const numberList = document.querySelector('.numbers');
const total = document.querySelector('.total');

btn.addEventListener('click', function() {
    const randomNumber = Math.ceil(Math.random() * 99);
    const countNumber = parseInt(total.innerText);
    total.innerText = String(countNumber + 1);
    numberList.innerHTML += `<div class="number">${randomNumber}</div>`;
});