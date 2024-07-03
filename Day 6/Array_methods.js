// Fetch the countries data
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // 1: Get all the countries from Asia continent/region using filter method
    const asianCountries = data.filter(country => country.region === 'Asia');
    console.log("Asian Countries:", asianCountries);

    // 2: Get all the countries with a population of less than 2 lakhs using filter method
    const lessPopulatedCountries = data.filter(country => country.population < 200000);
    console.log("Countries with Population < 2 Lakhs:", lessPopulatedCountries);

    // 3: Print the following details name, capital, flag, using forEach method
    data.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.png}`);
    });

    // 4: Print the total population of countries using reduce method
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log("Total Population:", totalPopulation);

    // 5: Print the country that uses US dollars as currency
    const usDollarCountries = data.filter(country => {
      return country.currencies && country.currencies.USD;
    });
    console.log("Countries using US Dollars:", usDollarCountries.map(country => country.name.common));
  })
  .catch(error => console.error('Error fetching data:', error));
