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

    for (var i = 0; i < countries.length; i++) {
        var country = countries[i];

        var card = document.createElement('div');
        card.className = 'country-card';

        var flag = document.createElement('img');
        flag.src = country.flags.svg || country.flags.png;
        flag.alt = 'Flag of ' + country.name.common;
        flag.className = 'country-flag';
        card.appendChild(flag);

        var info = document.createElement('div');
        info.className = 'country-info';
        card.appendChild(info);

        var name = document.createElement('h2');
        name.className = 'country-name';
        name.textContent = country.name.common;
        info.appendChild(name);

        var details = document.createElement('div');
        details.className = 'country-details';
        info.appendChild(details);

        var capital = country.capital?.[0] || 'N/A';


}
}