console.log('--------Styles, Attributes and Classes------');

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '100%';

//nem adja vissza, mert ha JS-ben adom emg a stílust 363. 364. sor akkor inline elemként rakja bele
console.log(message.style.color);

//ezt visszakapom mert a 363.sorban adtam hozzá
console.log(message.style.backgroundColor);

//getComputedStyle-al tudom lekérdezni az összes stílusadatot
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

//így tudom módosítani a stílusát egy elemnek
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
console.log(getComputedStyle(message).height);

//2.verzió. 1 paraméter a módosítandó css tulajdonsága , 2. az értéke
document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');

//lekérem az alt attribútum értékét
console.log(logo.alt);
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt);

//lekérem az osztály nevét
console.log(logo.className);

// Non-standard
console.log(logo.designer); //ezzel nem ír ki semmit mert nem standard attribútum

//ezzel adja vissza az attribútum értékét
console.log(logo.getAttribute('designer'));

//itt adhatok meg új, nem standard atrribútumot
logo.setAttribute('company', 'Bankist');
//és így tudum lekérdezni az értékét
console.log(logo.getAttribute('company'));

console.log(logo.src); //teljes linket visszaadja
console.log(logo.getAttribute('src')); //csak a mappa és a fájlnevet adja vissza

const link = document.querySelector('.nav__link--btn');
console.log(link.href); //teljes attribútumot adja vissza
console.log(link.getAttribute('href')); //csak az attribútum értékét adja meg

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// Don't use
logo.clasName = 'jonas';
