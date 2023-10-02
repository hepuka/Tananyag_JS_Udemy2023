"use strict";

// BANKIST APP
//user kz, jelszó 1111
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: "Kun-Fagyal Zoltán",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
};

const account2 = {
  owner: "Kun-Fagyal Katalin",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
};

const accounts = [account1, account2];

// #region
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");
const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");
const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");
const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");
//#endregion

//SUB FUNCTIONS

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
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
      .split(" ") //szétszedjük a nevet szavakra és azt egy tömben elemenként visszakapjuk
      .map((name) => name[0]) //bejárjuk ezt a visszakott tömböt és az egyes elemek kezdőbetűjéből kapunk egy újabb tömböt
      .join(""); //ennek a tömbnek az elemeit rakjuk egy string-é, és kapjuk meg a username-et
  });

  //nem kell return mert az egyes objektumokat módosítottuk közvetlenül ezzel a metódussal
};
createUsernames(accounts);

//2.táblázatba rakja az adatokat
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";

  //elsőnek a slice-al készítek egy másolatot a tömbről majd arra hívom meg a sort metódust
  //azért kell a másolat mert ellenkező esetben az eredeti tömböt akarom visszakapni
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

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

    containerMovements.insertAdjacentHTML("afterbegin", html);
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
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)

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
      labelWelcome.textContent = "Log in to get started";
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
btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting

  //megállítja az oldal frissülését
  e.preventDefault();

  //kimentjük a változóba a username mezőben megadott nevet, hogy azt ezután összehasonlítsuk a PIN-ben megadott kóddal
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  //a PIN mezőben megadott értéket számmá kell konvertálni, minden megadott érték string-ként kerül megadásra az oldalon
  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(
      " "
    )}`;
    containerApp.style.opacity = 100;

    // Create current date and time
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "long", //'number' azámként írja ki a hónapot
      year: "numeric",
      weekday: "long",
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
    inputLoginUsername.value = inputLoginPin.value = "";
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
btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();

  //érték tárolása a transfer to mezőből
  const amount = +inputTransferAmount.value;

  //receiverAcc mezőben megadott felhasználó mentése
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  //mező törlése
  inputTransferAmount.value = inputTransferTo.value = "";

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

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  //amount mező értékét az amount változóba mentjük
  const amount = Math.floor(inputLoanAmount.value);

  //ha a megadott mennyiség pozitív és a movements tömbben van olyan elem ami nagyobb mint az igényelt összeg 10%-a
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
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

  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  //ellenőrizzük, hogy a megadott username és a pin létezik-e
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = "";
});

//kilistázott utalások rendezése
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
