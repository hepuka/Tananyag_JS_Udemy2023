/*
ES5 -ben + jelekkkel kötjük össze a szavakat a változóértékekel

ES6-ban TEMPLATE LITERÁL-okat vagy TEMPLATE STRING-eket használunk amiket backTick közé rakunk

console.log(`${változónév} sima szöveg ${változónév} sima szöveg ${függvényhívás is lehet itt}`); */

let vnev = "Kun-Fagyal";
let keresztnev = "Zoltán";
const szuletesiEv=1977;

function korSzamitas(ev){

    let idei=new Date().getFullYear();

    return idei-ev;
}

console.log(`${vnev} ${keresztnev} most ${korSzamitas(1977)} éves`);


//ES6 string metódusok:

console.log(vnev.startsWith("K")); //true, mert K-val kezdődik a vnev
console.log(vnev.startsWith("Fagyal")); //false, mert nem Fagyal-al kezdődik a vnev
console.log(vnev.startsWith("Fagyal", 4)); //true, mert a 4.indextől kezdődik a Fagyal

let youSay="goodbye";
let iSay="hello";

if(youSay.startsWith("goodbye")){

    console.log(`you say ${youSay} and I say ${iSay}`);
}

console.log(`${youSay}`.startsWith("goodbye"))//true

console.log(vnev.endsWith("al")); //true, mert al-ra végződik a vnev

console.log(vnev.includes("agyal")); //true, mert agyal van a vnev-ben

console.log(vnev.repeat(3)); //3-szor kiírja a vnev-et szünet nélkül
console.log(`${vnev} `.repeat(3)); //3-szor kiírja a vnev-et szóközzel
