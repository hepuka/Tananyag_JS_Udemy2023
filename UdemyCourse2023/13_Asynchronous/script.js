'use strict';

//https://restcountries.com/v2/all

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  // console.log(request);

  request.addEventListener('load', function () {
    //mivel az adat a tömb első objektuma, így destruktúrálom az elején rögtön
    const [countryData] = JSON.parse(this.responseText);
    // console.log(countryData);
    renderCountry(countryData);

    // Get neighbour countries
    const [neighbour, ...others] = countryData.borders;
    // console.log(neighbour);
    // console.log(others);

    //2. AJAX hívás, hogy lekérjük a szomszéd ország adatait
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${others[0]}`);
    request2.send();

    request2.addEventListener('load', function () {
      const neighbourData = JSON.parse(this.responseText);
      // console.log(neighbourData);
      renderCountry(neighbourData, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('hungary');

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

//callback hell
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//fetch,promises
const fetchRequest = fetch('https://restcountries.com/v2/name/hungary');
// console.log(fetchRequest);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(
      //ha a promise fullfilled ez a callback függvény fut le
      response => {
        console.log(response);
        //annak a hibának a kezelése ha a megadott ország nem létezik
        //a respons.ok objektumot használjuk ha az false értékű
        if (!response.ok)
          throw new Error(`Country not found (${response.status})`);
        //mivel a json függvény egy async függvény, ez is egy új promise-al térvissza
        return response.json();
      }
      //rejected promise kezelésére megadunk egy második callback függvényt (err)
      //err => alert(err); ehelyett központi helyen kezeljük a hibát, a catch ágban
    )
    .then(data => {
      renderCountry(data[0]);

      // egy új fetch-et indítunk a szomszédos ország adatainak lekérésére
      const neighbour = data[0].borders?.[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => {
      if (!response.ok)
        throw new Error(`Neighbour Country not found (${response.status})`);
      return response.json();
    })
    .then(neightbourData => renderCountry(neightbourData, 'neighbour'))

    .catch(err => {
      console.error(err);
      renderError(`Something went wrong ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', () => {
//   getCountryData('hungary');
// });

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
};

//függvény ami tartalmazza a fetch-elést, a hibakezelést
const getJSON = function (url) {
  return fetch(url).then(res => {
    if (!res.ok) throw new Error('Something went wrong!');

    return res.json();
  });
};
// getJSON();

///////////////////////////////////////
//The Event Loop in Practice
//async miatt elsőnek a kát console sor fut le, majd a Promise-ok, mivel annak prioritása van a callback queue felett amelyben a settimeout függvény van. A 2.promisnak is prioritása van, attól függően, hogy egy nagy loop van benne deklarálva
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res));
Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});
console.log('Test end');

/////////////////////////////////////////
//Building a Simple Promise
// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log('Lotter draw is started');

//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN');
//     } else {
//       reject(new Error('You lost your money'));
//     }
//   }, 3000);
// });

//lotteryPromise egy promise object
//res => console.log(res) a resolve('You WIN'); függvényben lévőt adja vissza , ha a promise fullfilled
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

///////////////////////////////////////////////////////////////////////////////////////////////
//Promisifying setTimeout
// ugyanaz mint az elején a 4 settimout callback hell
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));

/////////////////////////////////////////////////////////////////////////////////////////////////
//a promise azonnal visszatér
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

//////////////////////////////////////////////////////////////////////////////////////////////////
//Promisifying the Geolocation API
const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      //resolve függvényben adjuk vissza a pozíciót mint fullfilled value
      position => resolve(position),
      err => reject(err)
    );
    //ez ugyanaz mint a 207-208.sor
    // navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
// getPosition().then(pos => console.log(pos));

//kirendereli ilyen módon is, hogy melyik országban vagyok
// const whereAmI2 = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.error(`${err.message}`));
// };

// btn.addEventListener('click', whereAmI2);

//////////////////////////////////////////////////////////////////////////////////////////////////
//Consuming Promises with Async/Await, Error Handling With try...catch

// fetch(`https://restcountries.com/v2/name/${country}`).then(res => console.log(res))

const whereAmI3 = async function () {
  try {
    // Geolocation
    // előzőekben így hívtuk meg:

    //   getPosition()
    //     .then(pos => {
    //       const { latitude: lat, longitude: lng } = pos.coords;
    //     })

    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();
    // console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    // console.log(res);
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();

    // console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err}`);
    renderError(`${err.message}`);
  }
};

// whereAmI3();

//////////////////////////////////////////////////////////////////////////////////////////////
//Returning Values from Async Functions

const whereAmI4 = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!resGeo.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    // return data[0];
    return `You are in ${dataGeo.city}, ${dataGeo.country} `;
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};

//a visszaadott érték kiolvasása az async függvényből

//1.verzió
// whereAmI4()
//   .then(returnedValue => console.log(returnedValue))
//   .catch(err => console.error(`2: ${err.message} 💥`));

//2.verzió
// (async function () {
//   try {
//     const returnedValue = await whereAmI4();
//     console.log(returnedValue);
//   } catch (err) {
//     console.error(err.message);
//   }
// })();

/////////////////////////////////////////////////////////////////////////////////////////////////
///Running Promises in Parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    //1.verzió, egymás után fetch-el
    const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    console.log([data1.capital, data2.capital, data3.capital]);

    //2.verzió
    //párhuzamosan fetch-eli a 3 adatot
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(data);
    console.log(data.map(item => item[0].capital));
  } catch (err) {
    console.error(err);
  }
};

// get3Countries('portugal', 'hungary', 'romania');

///////////////////////////////////////////////////////////////////////////////////////////////
//Other Promise Combinators: race, allSettled, any;

// Promise.race
//a leggyorsabban fetch-elt promise-al tér vissza
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

//rossz internetkapcsolat esetén ha túl sokáig tart a lekérdezés akkor a megadott idő után megszakítja a fetch-elést

//csak rejectet ad vissza
// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout( () => {
//       reject(new Error('Request took too long!'));
//     }, sec * 1000);
//   });
// };

// Promise.race([
//   getJSON(`https://restcountries.com/v2/name/tanzania`),
//   timeout(5),
// ])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

//Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ]).then(res => console.log(res));

//error-al tér vissza,mert ha az egyik promise error akkor a visszaadott promise is error lesz
// Promise.all([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// // Promise.any [ES2021]
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
