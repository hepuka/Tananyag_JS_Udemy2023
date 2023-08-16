////////////////////////ARRAYS/////////////////

let fruits = ['apple', 'banana', 'orange'];

fruits.push('grape'); //add to end
fruits.unshift('kiwi'); //add to beginning

fruits.pop(); //remove last
fruits.shift(); //remove first

for (let item of fruits) {
  console.log(item);
}

////////////////////////OBJECTS/////////////////////
let person = {
  name: 'John',
  age: 30,
  isStudent: false,
};

person.age = 31;
person.city = 'New York';

//get only keys
for (let keys in person) {
  console.log(keys);
}

console.log(Object.entries(person));

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}

Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

///////////////////////////////////////////SETS/////////////////////////////////
let colors = new Set();
colors.add('red');
colors.add('blue');
colors.add('green');
colors.delete('green');

console.log(colors);
console.log(colors.has('red'));

for (let item of colors) {
  console.log(item);
}

//////////////////////////////////////////MAPS///////////////////////////

let scores = new Map();
scores.set('John', 90);
scores.set('Alice', 85);
scores.set('Bob', 78);
scores.delete('Bob');
console.log(scores);
console.log(scores.get('Alice'));

for (let [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

//////////////////////////////////STACK, QUEUES/////////////////////////////

let stack = []; //push-pop
stack.push(1);
stack.push(2);
console.log(stack);
stack.pop(); //return the last added element
console.log(stack);
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);
stack.pop();
console.log(stack);

let queue = [];
queue.push('a');
queue.push('b');
console.log(queue);
queue.shift();
console.log(queue);
