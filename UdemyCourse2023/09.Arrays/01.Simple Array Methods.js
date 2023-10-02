'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log('-------SLICE--------');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

console.log('-------SPLICE--------');

arr.splice(-1); //utolsó elemet törli
console.log(arr);
arr.splice(1, 2); //A 0.elemet kiírja, majd az 1 indextől kezdve 2-t töröl és az utána lévőeket írja ki
console.log(arr);

console.log('-------REVERSE--------');
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());

//az eredeti tömböt is módosítja
console.log(arr2);

console.log('-------CONCAT--------');
arr = ['a', 'b', 'c', 'd', 'e'];
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

console.log('-------JOIN--------');
console.log(letters.join(' - '));

console.log('----------The new at Method---------');

arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// utolsó elemet 3 féleképpen is megkaphatom
//at metódussal a legegyszerűbb
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

//at-el a legegyszerűbb
console.log(arr.at(-1));

console.log('jonas'.at(0)); //jonas string első betűjét adja vissza
console.log('jonas'.at(-1)); //jonas string utolsó betűjét adja vissza
