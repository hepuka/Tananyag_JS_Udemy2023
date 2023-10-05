//HTTPrequest

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  console.log(request);

  request.addEventListener('load', function () {
    //mivel az adat a tömb első objektuma, így destruktúrálom az elején rögtön
    const [countryData] = JSON.parse(this.responseText);
    console.log(countryData);

    //innentől kezdve lehet renderelni az adatot UI-ra
    renderCountry(countryData);

    // Get neighbour countries
    const [neighbour, ...others] = countryData.borders;
    console.log(neighbour);
    console.log(others);

    //2. AJAX hívás, hogy lekérjük a szomszéd ország adatait
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${others[0]}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2);
    });
  });
};
