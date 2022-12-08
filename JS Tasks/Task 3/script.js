/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const btnEl = document.querySelector('#btn');
const displayUsers = document.querySelector('#output');

async function getData() {
    try {
        const response = await fetch(ENDPOINT);
        if (response.ok) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log('Error: ', error);
    }
};

function renderData(users) {
    const message = document.querySelector('p').style.display = 'none';
    users.forEach(user => {
        displayUsers.innerHTML +=
            `<div class='user-card'>
                <div class='img-div'><img src='${user.avatar_url}' alt='Avatar url'><div>
                <div class='login-div'>${user.login}<div>
            <div>`
    });
};

async function init() {
    try {
        const data = await getData();
        renderData(data);
    } catch (error) {
        console.log("Couldn't get data... ", error);
    }
};

btnEl.addEventListener('click', init);