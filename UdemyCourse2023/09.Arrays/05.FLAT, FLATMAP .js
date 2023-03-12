console.log('-----------FLAT, FLATMAP method-----------');
//ES2019-ben jelent meg

//beágyazott tömb
const arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr3);

//beágyazott tömbből visszaad egy sima tömböt amiben minden elem benne van
//arr3 = [[1, 2, 3], [4, 5, 6], 7, 8];
//arr3 = [1,2,3,4,5,6,7, 8];
console.log(arr3.flat());

//többmélységű tömb
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
//() jelbe kell rakni a mélység számát, ez a depth argument
console.log(arrDeep.flat(2));

// flat
//ez esetben nem csak egy accountot járunk és adjuk vissza az összeget, úgy mint az alkalmazásban, hanem a az egyberakott tömböt járjuk be amiben több account van
console.log(accounts);
const overalBalance = accounts
  .map(acc => acc.movements) //ezzel egy tömböt kapunk ami tartalmazza az összes movement array-t
  .flat() //egy tömböt kapunk amiben az összes movement eleme benne van
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
//ebben a verzióban a map és az azt követő flat metódusv van egybe
const overalBalance2 = accounts
  .flatMap(acc => acc.movements) //itt már rögtön egy tömböt kapunk amiben benne van az összes movement elem
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
