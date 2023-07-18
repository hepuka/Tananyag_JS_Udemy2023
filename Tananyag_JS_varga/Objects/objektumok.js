//létrehozás objektum literállal
let player = {
  name: "Johnny",
  energy: 100,
  lives: 2,
  x: 19,
  y: 100,
  color: "blue",
  signin: ["basic", "business", "world"],
  weapons: ["sword", "gun"],
  putData: function () {
    return `Datas: ${this.name} ${this.energy} ${this.lives}`;
  },
  addWeapon: function (newWeapon) {
    this.weapons.push(newWeapon);
  },
  addEnergy: function (e) {
    this.energy = this.energy + e;
  },
};

console.log(player.putData());
console.log(player);
player.addEnergy(100);
console.log(player);

//létrehozás new object-el
/*let tas = new Object();
tas.nev = "Tas";
tas.kor = 32;
tas.foglalkozas = "vezér";*/

console.log(player);
console.log("Player name: " + player.name);
//console.log(tas);

//objektum értékeinek módosítása
player.name = "Ralf";
player.color = "green";

//objektumhoz hozzáadunk tulajdonság-érték párokat
player.friend = { name: "Pablo", energy: 20, lives: 5 };
player.signin.push("admin");
console.log(player);

//console.log(tas);
console.log("\n ");

///////////////////////////////////////////////////////////////////////////////////////////////
//OBJEKTUMOK METÓDUSSAI (TAGFÜGGVÉNYEK)
//////////////////////////////////////////////////////////////////////////////////////////////

console.log("//////////////OBJEKTUMOK METÓDUSSAI/////////////");

let Zoltan = {
  nev: "Zoltan",
  lakhely: "Debrecen",
  kor: 45,
  szuletesiEvSzamitas: function () {
    // return 2022 - this.kor; //az objektumban megadott kor-ra hivatkozunk a this-el. A this mindig az aktuális objektumra hivatkozik melyen keresztül elérhető az obj. tulajdonságai

    this.szuletesiEv = 2022 - this.kor; //közvetlenül hozzáadjuk az objektum elemeihez
  },
};

/*
console.log(Zoltan.szuletesiEvSzamitas());

Zoltan.szuletesiEv=Zoltan.szuletesiEvSzamitas(); //itt a kapott értéket hozzáadjuk az objektum elemeihez
*/

Zoltan.szuletesiEvSzamitas(); //meg kell hívni, hogy hozzáadódjon az objektum elemeihez
console.log(Zoltan);

var enemies = [
  { x: 10, y: 50, energy: 100 },
  { x: 11, y: 55, energy: 1 },
  { x: 12, y: 50, energy: 50 },
  { x: 13, y: 55, energy: 10 },
  { x: 14, y: 50, energy: 30 },
];

enemies[3].energy = 12;
enemies[1].x = 1;
enemies[2].y = 1;
console.log(enemies);
