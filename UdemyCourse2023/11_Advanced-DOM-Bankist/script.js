'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// Modal window

const openModal = function (e) {
  e.preventDefault();

  //eltávolítjuk a hidden osztályból és megjeleneik a beállításoknak megfelelően
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//hozzáaadjuk a hidden osztályhoz és így eltűnik
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling - Scroll to section1 part
btnScrollTo.addEventListener('click', function (e) {
  //1. lépésként a section1 pozícióját kapom meg
  const s1coords = section1.getBoundingClientRect();

  //2.lépésként csak meghívom a scroll-t
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Page navigation - menü scrollozása az oldal adott pontjára
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // nav__link osztály ellenőrzése, ha tartalmazza csak akkor fusson le, más osztályú elemre ne az ul-en belül
  if (e.target.classList.contains('nav__link')) {
    //id változóba kimentem az éppen aktuális link href értékét ami az egyes section-ök id-ja
    const id = e.target.getAttribute('href');

    //erre az id-re hívom meg a scroll metódust
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component - Operations section-ben
tabsContainer.addEventListener('click', function (e) {
  //elmentjük, hogy melyik gombra lett kattintva
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation: Intersection Observer API

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Revealing Elements sections
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// Lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider, utolsó section
//translateX értékét változtatom %-ban
//középső 0%, baloldali -100% és a jobb +100%
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);

    createDots();

    activateDot(0);
  };

  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

///LESSONS

console.log('-------How the DOM Really Works---------');

//pdf elméleti anyag

console.log('----Selecting, Creating, and Deleting Elements-----');

// Selecting elements
console.log(document.documentElement); //teljes HTML-t visszaadja
console.log(document.head); //teljes head-et adja vissza
console.log(document.body); //teljes body-t adja vissza

//header = document.querySelector('.header');

//allSections = document.querySelectorAll('.section'); //összes section osztályú elemet visszaadja
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message'); //hozzáaadom az elemet egy osztályhoz

// message.textContent = 'We use cookied for improved functionality and analytics.';

//message elem tartalma
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//elem hozzáadása a DOM-hoz

/* az elem első gyerekeként adja hozzá
itt a header első gyerekeként adja hozzá a message elemet
header.prepend(message);
*/

//az elem utolsó gyerekelemeként adja hozzá
header.append(message);

//klónozni is tudunk egy elemet egy másik helyről
//itt az előbb a prepend helyre berakott message elemet klónozom az appenf helyre
//header.append(message.cloneNode(true));

//az elem elé helyezi a megadott elemet
//itt a head elé rakja a message elemet
// header.before(message);

//itt a head után rakja be
// header.after(message);

// Delete elements
//elem törlése. pl ha egy üzenet bezáró ikonjára kattintunk
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //message.parentElement.removeChild(message);
  });

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

console.log('----Types of Events and Event Handlers----');

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

//egérkattintásra működik
//h1.addEventListener('mouseenter', alertH1);

// 3mp után már nem engedi működni az eseménykezelőt
//setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

console.log('---------Event Propagation: Bubbling and Capturing----------- ');
//pdf elméleti anyag

console.log('------Event Propagation in Practice-------');

//véletlenszám generálása
/* const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

//véletlen szín generálása a randomszám szerint
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('NAV', e.target, e.currentTarget);
});
 */
console.log('---------DOM Traversing--------');

// Going downwards: child
/* console.log(h1.querySelectorAll('.highlight'));

console.log(h1.childNodes);

console.log(h1.children);

//banking szó
h1.firstElementChild.style.color = 'white';

//minimalist szó
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings - testvérelemek
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
}); */

console.log('--------Sticky navigation----------');
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

console.log(
  '-------------- Sticky navigation: Intersection Observer API-----------'
);

const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);

// Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

/* window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
}); */
