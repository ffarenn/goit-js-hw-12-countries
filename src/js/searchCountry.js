import fetchCountries from '../js/fetchCountries.js';
   
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import countryCardTemplate from '../templates/countryTemplate.hbs'
import countriesCardTemplate from '../templates/countriesTemplate.handlebars'

import refs from '../js/refs'

const {formBox, inputBox} = refs


fetchCountries().then(renderCountryCard).catch(error => console.log(error))

function renderCountryCard(name){
    const markUp = countryCardTemplate(name)
    refs.formBox.innerHTML = markUp
}

// fetch('https://restcountries.com/v2/name/Latvia').then(
//     response => {
//         return response.json();
//     })
//     .then(name => {
//         console.log(name);
//         const markUp = countryCardTemplate(name)
//         console.log(markUp);
//         refs.formBox.innerHTML = markUp
//     })






