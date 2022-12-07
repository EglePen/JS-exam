/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const formEl = document.querySelector('form');
const results = document.querySelector('#output');

formEl.addEventListener('submit', calculate);

function calculate(event) {
    event.preventDefault();
    const inputValue = document.getElementById('search').value;

    results.innerHTML = '';

    const convertToLb = inputValue * 2.2046;
    const convertToGram = inputValue / 0.0010000;
    const convertToOz = inputValue * 35.274;

    results.innerHTML = 
        `<div class='output-line'> ${convertToLb} lb</div>
        <div class='output-line'> ${convertToGram} g</div>
        <div class='output-line'>${convertToOz} oz</div>`;
}
