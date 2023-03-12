console.log('--------Sorting Arrays-------');

// Strings
//az eredeti tömböt is módosítja
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //JS beépített sor metódusával abc sorrendbe rakom. ebben a formában, csak string-re használható. Számokra nem
console.log(owners);

// Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

//növekvő sorrebe rakja az elemeket
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

//csökkenő sorrenbe rakja az elemeket
movements.sort((a, b) => b - a);
console.log(movements);
