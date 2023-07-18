let numbers=[1,2,3,4,5,6,7,8,9,10];

let sum=numbers.reduce((result,item) => {

    return result+item;

});

console.log(sum);

let pets=['dog', 'chicken', 'cat', 'dog', 'chicken', "chicken", 'rabbit'];

//összeszámolja egyes elem hányszoer szerepel a tömbben
let petCounts=pets.reduce((obj, pet) => {

   if(!obj[pet]){

       obj[pet]=1;
   }
   else{

       obj[pet]++;
   }

   return obj;
}, {});

console.log(petCounts);