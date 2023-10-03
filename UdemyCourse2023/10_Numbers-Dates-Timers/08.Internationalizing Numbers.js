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
