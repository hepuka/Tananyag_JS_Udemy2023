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
