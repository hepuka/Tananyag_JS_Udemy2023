//////////////////////////////////////EXPORT FUNCTIONS////////////////////////////

//import playGuitar from "./guitar.js"; //így csak akkor importálható, ha default-ként van exportálva az eredeti js fájlban

import { playGuitar, shredding, plucking } from "./guitar.js";
import * as Guitars from "./guitar.js";
import { User } from "./user.js";

console.log(playGuitar());
console.log(shredding());
console.log(plucking());

console.log(Guitars.playGuitar()); //ha így van importálva: import * as Guitars from "./guitar.js"; ekkor a közös névre meg kell hívni a függvényt
//console.log(Guitars.default()); így kell meghívni a default-ként exportált függvényt

const newUser = new User("email@email.com", "Hepuka");
console.log(newUser);
console.log(newUser.greeting());
