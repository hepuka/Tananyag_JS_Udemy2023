console.log('-----------LOGICAL ASSIGNMENT OPERATOR------------');

//ES2021-től

const restaurant1 = {
  name: 'Capri',
  numGuests: 20,
  //numGuests: 0,
};

const restaurant2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

//OR ASSIGNMENT OPERATOR

//mivel a restaurant1-nek van már numGests tulajdonsága így ez adja vissza
//mivel az első tag true, mivel már van ilyen tulajdonság így a 20-at adja vissza

//ha az obejkumban a numGuests érték 0 lenne, akkor az első tag false lenne, így a visszaadott érték 10 lenne
restaurant1.numGuests = restaurant1.numGuests || 10;
//restaurant1.numGuests ||= 10; rövidített változat

//mivel a restaurant2-nek nincs numGests tulajdonsága így az első tag false a 2. true így hozzáadja az objektumhoz ezt a
//tulajdonságot és értéket
restaurant2.numGuests = restaurant2.numGuests || 10;

console.log(restaurant1);
console.log(restaurant2);

//NULLISH OPERÁTORRAL - null or undefined
restaurant1.numGuests ??= 10;
restaurant2.numGuests ??= 10;

restaurant1.owner = restaurant1.owner && '<ANONYMOUS>';
//restaurant1.owner &&= '<ANONYMOUS>'; rövidített változat
restaurant2.owner = restaurant2.owner && '<ANONYMOUS>';

console.log(restaurant1);
console.log(restaurant2);
