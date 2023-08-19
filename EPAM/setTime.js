const element = document.getElementById("demo");
let a = 0;

const myInterval = setInterval(function () {
  element.innerHTML += "Hello ";
  a++;

  if (a === 6) {
    myStopFunction();
  }
}, 1000);

function myStopFunction() {
  clearInterval(myInterval);
  setTimeout(() => {
    element.innerHTML = "setTimeOut Ended ";
  }, 1000);
}

for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

//u.a.
for (let i = 1; i <= 10; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}
