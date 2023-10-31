const content = document.querySelector('.main');

let users = [];

fetch('https://randomuser.me/api/?results=20').then((response) => {
    return response.json();
}).then((data) => {
    users = data.results;
    showHumans();
});

function showHumans() {
    content.innerHTML = '';

    users.forEach((user) => {

        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML =
        `<br>
        <p>${user.gender === "female" ? "<ion-icon name='female-outline' size='large'>" : "<ion-icon name='male-outline' size='large'>"}</p>
        <img src="${user.picture.medium}" alt="">
        <br><br>
        <h5>${user.name.title} ${user.name.first} ${user.name.last}</h5>
        <p>${user.email}</p>`;

        content.appendChild(card);
    })
};
