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

//fetch metódus
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(res => {
      if (!res.ok) throw new Error(res.status);
      return res.json();
    })
    .then(data => {
      renderCountry(data[0]);
    })
    .catch(err => {
      console.error(err);
    });
};

//Promise object
//1.
const lotteryPromise = new Promise((resolve, reject) => {
  console.log('Lotter draw is started');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject(new Error('You lost your money'));
    }
  }, 3000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//2.
const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};

getPosition()
  .then(res => console.log(res))
  .catch(err => console.error(err));

//3.
const imgContainer = document.querySelector('.images');
let currentImg;

const wait2 = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('Image 1 loaded');
    return wait2(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('Image 2 loaded');
    return wait2(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));

//Async-Await
const whereAmI3 = async function () {
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');
    const dataGeo = await resGeo.json();

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    console.log(res);
    if (!res.ok) throw new Error('Problem getting country');
    const data = await res.json();
    renderCountry(data[0]);

    return data[0];
  } catch (err) {
    console.error(`${err}`);
  }
};

//a visszaadott érték kiolvasása az async függvényből

//1.
whereAmI3()
  .then(returnedValue => console.log(returnedValue))
  .catch(err => console.error(err.message));

//2.
(async function () {
  try {
    const returnedValue = await whereAmI4();
    console.log(returnedValue);
  } catch (err) {
    console.error(err.message);
  }
})();

//Running Promises in Parallel
const get3Countries = async function (c1, c2, c3) {
  try {
    //1.verzió
    const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    console.log([data1.capital, data2.capital, data3.capital]);

    //2.verzió
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(item => item[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'hungary', 'romania');
