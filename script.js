var searchForm = document.getElementById('search-form');
var countryInput = document.getElementById('country-input');
var resultsContainer = document.getElementById('results-container');

searchForm.onsubmit = function(event) {
    event.preventDefault();
    resultsContainer.innerHTML = '';
    getCountryInfo(countryInput.value);
    return false;
};

function getCountryInfo(countryname) {
    var url = `https://restcountries.com/v3.1/name/${countryname}`;
    
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(countries) {
            showCountryCards(countries);
        });
}

function showCountryCards(countries) {
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'grid';

}