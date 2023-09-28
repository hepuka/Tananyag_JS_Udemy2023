'use strict';

const modal = document.querySelector('.modal'); //az előugró ablak
const closeWithOverlay = document.querySelector('.overlay'); //hely ahová az előugró ablak előjön

const btnCloseModal = document.querySelector('.close-modal'); //előugró ablak x gombja

//queryselectorAll kell mert 3 gomb van a főoldalon ugyanazzal az osztálynévvel
//queryselector csak az első gombot látja
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

//előhozza az előugró ablkat
const openModal = () => {
  modal.classList.remove('hidden');
  closeWithOverlay.classList.remove('hidden');
};

//eltünteti az előugró ablakot
const closeModal = () => {
  modal.classList.add('hidden');
  closeWithOverlay.classList.add('hidden');
};

//mivel több gomb van ugyanazzal az osztálynévvel for-al kell kiválasztani amelyiket szeretnénk
for (let i = 0; i < btnsOpenModal.length; i++) {
  //console.log(btnsOpenModal[i]); //kiírja mind

  //az i-edik elemre hívjuk meg mindig a föggvényeket
  btnsOpenModal[i].addEventListener('click', openModal);
}

//bezárja az előugró ablakot akkor is ha az elhomályosított részre kattintok
closeWithOverlay.addEventListener('click', closeModal);

btnCloseModal.addEventListener('click', closeModal);

//ESC gombbal is bezárható az ablak
document.addEventListener('keydown', e => {
  //console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
