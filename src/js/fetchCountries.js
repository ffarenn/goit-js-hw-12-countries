export default function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.com/rest/v2/name/${searchQuery}`)
        .then(response => response.json())
};
   