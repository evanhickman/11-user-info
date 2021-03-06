import 'whatwg-fetch';

import data from './user-info';

const photoEl = document.querySelector('.user-card__top-pic');
photoEl.src = data.results[0].picture.large;

const nameEl = document.querySelector('.user-card__info-name');
nameEl.innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`;

const emailEl = document.querySelector('.user-card__info-email');
emailEl.innerText = `${data.results[0].email}`;

const mobileEl = document.querySelector('.user-card__info-mobile');
mobileEl.innerText = `${data.results[0].cell}`;

const locationEl = document.querySelector('.user-card__info-location');
locationEl.innerText = `${data.results[0].location.city}, ${data.results[0].location.state}`;
