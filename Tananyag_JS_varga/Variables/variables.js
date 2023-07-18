//function scope

function afunc() {
  var a = 1;
  let b = 1;
  const c = 1;
  return a;
}

function afunc2() {
  var a = 1;
  let b = 1;
  const c = 1;
  return a;
}

var a = 7;
let r = afunc();
console.log(r);

let d = 7;

function afunc3() {
  let d = 8;
  console.log(d);
}

afunc3();
console.log(d);

//blokk scope

if (true) {
  var alma = "alma";
  console.log(alma);
}

console.log(alma);

let gyumi = ["alma", "dio", "banán", "cseresznye"];

for (var i = 0; i < gyumi.length; i++) {
  console.log(i, gyumi[i]);
}

console.log(i);

function doubleArr(arr) {
  const result = [];
  for (let num of arr) {
    let double = num * 2;
    result.push(double);
  }

  return result;
}

let res = doubleArr([1, 2, 3]);

console.log(res[0]);

function outer() {
  let movie = "outer_movie";

  function inner() {
    let movie = "inner_movie";
    console.log(movie.toUpperCase());

    function extrainne() {
      console.log(movie.toUpperCase());
    }

    extrainne();
  }

  console.log(movie.toUpperCase());

  inner();
}

outer();
