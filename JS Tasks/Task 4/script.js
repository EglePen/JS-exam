/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
import cars from './cars.json' assert {type: 'json'};

const outputDiv = document.querySelector('#output');

function displayCars(car) {
    car.forEach(element => {
        outputDiv.innerHTML +=
        `<div class='brand-card'>
            <div class='brand'> ${element.brand}</div> 
            <div class='models'> ${element.models}</div>
        </div>`
    });
}

displayCars(cars);
