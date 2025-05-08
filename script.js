var searchForm = document.getElementById('search-form');
var countryInput = document.getElementById('country-input');
var resultsContainer = document.getElementById('results-container');

searchForm.onsubmit = function(event) {
    event.preventDefault();
    resultsContainer.innerHTML = '';
    getCountryInfo(countryInput.value);
    return false;
};