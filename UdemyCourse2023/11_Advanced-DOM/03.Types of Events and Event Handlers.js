console.log('----Types of Events and Event Handlers----');

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading :D');
};

//egérkattintásra működik
//h1.addEventListener('mouseenter', alertH1);

// 3mp után már nem engedi működni az eseménykezelőt
//setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
