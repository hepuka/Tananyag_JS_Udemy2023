console.log('----------SPREAD OPERATOR-------------------');

//SPREAD OPERÁTOR ALKALMAZÁSA:
//-EGY UJ TÖMB LÉTREHOZÁSA ÉS FELTÖLTÉSE
//-TÖBB PARAMÉTER ÁTADÁSA EGYSZERRE A FÜGGVÉNYNEK
//- EGY TÖMB KITERJESZTÉSE ÚJ ELEMEKKEL

//ES5 verzió, régimódi
const arr2 = [4, 5, 6];
const newBadArray = [1, 2, 3, arr2[0], arr2[1], arr2[2]];
console.log(newBadArray);

//ES6
const addArray = [1, 2, 3];
const newRightArray = [...addArray, ...arr2];
console.log(newRightArray);

//kiírja a tömb egyes elemeit
//ha szükség van a tömb elemeire egyenként akkor csak a spread operátort használjuk a tömbhöz
console.log(...newRightArray);

//newMenu tömbe berakja az eredeti meinMenu tömböt és hozzáadja még az elemeket
//ilyenkor az eredeti tömb nem változik, ezért mindenegyes iterációkor használni kell a spread operátort és megadni az új tömböt
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
const menu3 = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu3);

//Iterables: array, string, maps, sets. NOT OBJECT
const str = 'Kun-Fagyal';
const letters2 = [...str, ' ', 'Z.'];
console.log(letters2);
console.log(...str);

//ha a prompt-ból akarom emgadni a hozzávalókat, azokat egy tömbe helyezem el
/* const ingredients = [
  prompt("Let's make pasta! Ingredient1 ?"),
  prompt("Let's make pasta! Ingredient2 ?"),
  prompt("Let's make pasta! Ingredient3 ?"),
];
 */
const ingredients = ['mushrooms', 'aspargus', 'cheese'];
console.log(ingredients);

//paraméterátadáskor is használható a spread operátor. egy tömb elemeit adjuk át
restaurant.orderPasta(...ingredients);

//SPREAD oprátor objektumokra ES2018 óta csak
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

//másolatot készítünk az eredetiről
const restaurantCopy = { ...restaurant };

//másoltban lévő nevet megváltoztatjuk
restaurantCopy.name = 'Ristorante Rome';

//az eredeti objektumot nem módosította
console.log(restaurantCopy.name);
console.log(restaurant.name);
