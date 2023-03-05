console.log('--------Consuming Promises---------');
console.log('--------Chaining Promises (then - catch - finally)-----------');
console.log('--------Handling Rejected Promises--');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1; finally ágban van kezelve
};

//függvény ami tartalmazza a fetch-elést, a hibakezelést és  json-á alakítást
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

//EREDETI KÓD, AMI ALATTA VAN A getJSON függvény által használt
/* const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      response => {
        console.log(response);

        //annak a hibának a kezelése ha a megadott ország nem létezik
        //a response ok objektumát használjuk ha az false értékű
        if (!response.ok)
          throw new Error(`Country not found (${response.status})`);

        return response.json();
      }
      //rejected promise kezelésére megadunk egy második callback függvényt (err)
      //catching error
      //err => alert(err) központi helyen kezeljük a hibát, a catch ágban a függvény végén
    )
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })

    .then(
      response => {
        if (!response.ok)
          throw new Error(`Country not found (${response.status})`);

        response.json();
      }
      //err => alert(err)
    )
    .then(data => renderCountry(data, 'neighbour'))
    //központi helyen kezeljük a hibát, a catch ágban
    .catch(err => {
      console.error(`${err}`);
      //minden error-nak message property-je
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}; */

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error('No neighbour found!');

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Country not found'
      );
    })

    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

/* btn.addEventListener('click', function () {
  getCountryData('portugal');
}); */

//getCountryData('hungary');
