'use strict';

// BANKIST APP

// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Kun-Fagyal Zoltán',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
};

const account2 = {
  owner: 'Kun-Fagyal Katalin',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
////////////////////////////////////////////////

//SUB FUNCTIONS

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

////////////////////////////////////////////////
////////////////////////////////////////////////
//MAIN FUNCTIONS

//A teljes névből készítünk egy username-et
///mindegyik név első betűiből kell összerakni a username-et
/* 
const user = 'Steven Thomas Williams';
const createUsernames = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(item => item[0])
    .join('');

  return username;
}; */

//függvény ami az egyes objektumok owner property-éből csinál username-et és ezt hozzáadja az objektumhoz mint egy új property (side effect-et csinálunk)
//ezért elsőnek az összes account objektumot egy tömbe kellett rakni

//1. username-et készít a névből és ezt a username-et hozzáaadja mindengyes account-hoz
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ') //szétszedjük a nevet szavakra és azt egy tömben elemenként visszakapjuk
      .map(name => name[0]) //bejárjuk ezt a visszakott tömböt és az egyes elemek kezdőbetűjéből kapunk egy újabb tömböt
      .join(''); //ennek a tömbnek az elemeit rakjuk egy string-é, és kapjuk meg a username-et
  });

  //nem kell return mert az egyes objektumokat módosítottuk közvetlenül ezzel a metódussal
};
createUsernames(accounts);

//2.táblázatba rakja az adatokat
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  //elsőnek a slice-al készítek egy másolatot a tömbről majd arra hívom meg a sort metódust
  //azért kell a másolat mert ellenkező esetben az eredeti tömböt akarom visszakapni
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//3.a felületre kiírja az éppen aktuális pénzösszeget
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

//4.az alkalmazás alján kiírja az IN, OUT, INTEREST értékeket
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)

    //csak akkor van kamat ha a kamat legalább 1 euró, ezért a map által visszaadott tömbre megint egy filtert kellett rakni
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

//5. Időzítő
const startLogOutTimer = function () {
  // Set time to 5 minutes
  let time = 300;

  const tick = function () {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      //megszakítom a timer futását
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrease 1s
    time--;
  };

  // Call the timer every second
  tick();

  //meghívom a setInterval függvényt majd átadom neki a tick függvényt és megadom neki, hogy 1mp után frissítsen
  const timer = setInterval(tick, 1000);

  return timer;
};

//6. függvény ami tartalmazza az összes függvényt aminek frissülnie kell egy végrehajtás után
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

////////////////////////////////////////////////
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

//bejelentkező gombra való tevékenykedés
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting

  //megállítja az oldal frissülését
  e.preventDefault();

  //kimentjük a változóba a username mezőben megadott nevet, hogy azt ezután összehasonlítsuk a PIN-ben megadott kóddal
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  //a PIN mezőben megadott értéket számmá kell konvertálni, minden megadott érték string-ként kerül megadásra az oldalon
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(
      ' '
    )}`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long', //'number' azámként írja ki a hónapot
      year: 'numeric',
      weekday: 'long',
    };

    //a böngészőben beállított nyelvet kérdezi le és ezt adom meg mint paraméter az Intl.DateTimeFormat - nak
    const locale = navigator.language;

    //internat.formátumot használunk
    labelDate.textContent = new Intl.DateTimeFormat(
      locale,
      options

      //now változóban kévő dátumot formázzuk a helyi időnek megfelelőnek
    ).format(now);

    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Timer
    //elsőnek meg kell szakítani a timer-t, mert ez már fut az előző bejelentkezéskor
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

//pénzutalás egyik felhasználótól a másiknak
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  //érték tárolása a transfer to mezőből
  const amount = +inputTransferAmount.value;

  //receiverAcc mezőben megadott felhasználó mentése
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  //mező törlése
  inputTransferAmount.value = inputTransferTo.value = '';

  //ellenőrzés az utalás előtt
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount && //ballancenak nagyobbnak kell lennie a küldendő értéknél
    receiverAcc?.username !== currentAccount.username //a cél username és a küldő nem lehet azonos
  ) {
    // Doing the transfer
    // ha minden feltétel megfelel akkor utalás megtörténik
    currentAccount.movements.push(-amount); //saját számláról leveszem a küldendő értéket
    receiverAcc.movements.push(amount); //a célszámlához hozzáadom

    // Add transfer date
    //amikor egy utalás megtörténik akkor hozzáadja az aktuális dátumot mindkát művelethez
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    // Reset timer
    //utalás után újraindítjuk a visszaszámlálót
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  //amount mező értékét az amount változóba mentjük
  const amount = Math.floor(inputLoanAmount.value);

  //ha a megadott mennyiség pozitív és a movements tömbben van olyan elem ami nagyobb mint az igényelt összeg 10%-a
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //a kölcsön folyósítása 2,5 mp múlva lesz
    setTimeout(function () {
      // Add movement
      //mivel a fenti feltétel true, így hozzáadódik az összeg
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  //ellenőrizzük, hogy a megadott username és a pin létezik-e
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

//kilistázott utalások rendezése
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
// LECTURES

console.log('---------Converting and Checking Numbers--------');

console.log(23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Conversion
console.log(Number('23'));
//ha a string előtt + jel van akkor is átkonvertálja
const szam = +'23';
console.log(typeof szam);

// Parsing
//parseInt 2. paramétere a számrendszert adja meg
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log(Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));

console.log('---------Math and Rounding-------');

console.log(Math.sqrt(25));

// ** exponentiation operator
//  It is equivalent to Math.pow()
console.log(25 ** (1 / 2));
console.log(Math.pow(25, 1 / 2));

console.log(8 ** (1 / 3));
console.log(Math.pow(8, 1 / 3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));
console.log(Math.max(5, 18, '23px', 11, 2)); //itt már nem működik

console.log(Math.min(5, 18, 23, 11, 2));

//10px sugarú kőr
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);
console.log(Math.floor(Math.random() * 6) + 1);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(1, 6));

// Rounding integers
//a legközelebbi egész számhoz kerekít
console.log(Math.round(23.3));
console.log(Math.round(23.5)); //itt felfelé
console.log(Math.round(23.9));

//mindig felfele kerekít
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

//mindig lefele kerekít
console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));

console.log(Math.trunc(23.3));
console.log(Math.trunc('23.9'));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding decimals
//toFixed stringet ad vissza szám helyett
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3)); ///3 tizedes jegyre kerekít
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2)); //számmá konvertálok a + jellel

console.log('----------The Remainder Operator--------');
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  //spread operátorral is valós tömbbé lehet konvertálni a NodeList-et, amire rögtön meghívhatom már a forEach-et
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    // 0, 2, 4, 6
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    // 0, 3, 6, 9
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

console.log('-----------Numeric Separators-------------');

// 287,460,000,000
// _  vonallal szétválazthatom a nagy számokat, hogy jobban lássam, mivel a js figyelmen kívül hagyja ezeket a karaktereket
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000')); //itt a _ már nem működik, NaN ad vissza
console.log(parseInt('230_100')); //itt működik de csak az előtte lévő számokat adja visssza

console.log('-------Working with BigInt-------');
//ES2020-tól

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

console.log(4838430248342043823408394839483204n);
console.log(BigInt(48384302));

// Operations
console.log(10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));

// Exceptions
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == '20');

console.log(huge + ' is REALLY big!!!');

// Divisions
console.log(11n / 3n);
console.log(10 / 3);

console.log('----------Creating Dates---------');

// Create a date
const now = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
console.log(new Date(account1.movementsDates[0]));

//azért ír ki novembert attól függetlenül hogy mi itt 10-et adtunk mdg hónapnak, mert itt a hónapot 0-tól számolja
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 31));

console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));

// Working with dates
let future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));

console.log(Date.now());

//future változó évét változtatom meg, a többi változatlan marad
future.setFullYear(2040);
console.log(future);

console.log('-----------Operations With Dates---------');

future = new Date(2037, 10, 19, 15, 23);
//számmá konvertálom a date-et, milliseconds formában tárolja
console.log(+future);

//mivel számmá (timestamp milliseconds-ben) van konvertálva így műveleteket is hajthatunk végre
//visszaadja hogy hánynap telt el a két idő között
const calcDaysPassed = (date1, date2) =>
  //el kell osztani mert enélkül millisecundumban kapjuk meg az értéket

  //az osztás a végén 24 mert 1 nap 24 óra, 60 perc 1 óra, 60 mp 1 perc és 1000 millisecindum 1 mp
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(now, new Date(2005, 5, 15));
console.log(days1);

console.log('------Internationalizing Numbers (Intl)------');

const num2 = 3884764.23;

const options = {
  //MDN oldal a

  //ezeket a stílusokat adhatjuk meg
  //style: 'unit',
  //style: 'percent',
  style: 'currency',

  //a stlusokhoz ezeket adhatjuk meg
  //unit: 'kilometer-per-hour',
  //unit: 'celsius',
  currency: 'EUR',
  //currency: 'HUF',
  useGrouping: true,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num2));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num2));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num2));

//HU számok
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num2)
);

console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num2)
);

console.log('---------TIMERS--------');

console.log('setTimeout');
const ingredients = ['olives', 'spinach'];

//3 mp után visszatér a string-el
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  //3.paraméter egy tömb is lehet
  ...ingredients
);

//elsőnek ez fog megjelnni, majd 3 mp után a pizza string
console.log('Waiting...');

//törölni is tudjuk a várakozást (settimeout futását) ha a megadott feltétel true
//mivel ezesetben a tömb tartalmazza a spinach-ot így nem fog elfutni a settimeout
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

console.log('setInterval');

//a setinterval minden megadott mp (10mp) után lefut
//minden 10mp-ben egy új date jön létre
/* setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000); */
