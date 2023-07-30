const myArray = ["eat", "drink", "coding"];

const myObject = {
  name: "Zoltán",
  hobbies: ["eat", "drink", "coding"],
  logName: function () {
    console.log(this.name);
  },
};

/////////////////////////sessionstorage/////////////////////
sessionStorage.setItem(
  "session_Object_Data",
  JSON.stringify(myObject), //a tárolandó adatot (objektum és tömb esetén is) JSON sztringé kell alakítani, így tárolódik a storage-ban.
);
const mySessionObjectData = JSON.parse(
  //a tárolóból lekért adatot vissza kellállítani JSON objektummá
  sessionStorage.getItem("session_Object_Data"),
);
console.log(mySessionObjectData);

/////////////////////////localStorage/////////////////////

localStorage.setItem("local_Object_Data", JSON.stringify(myObject));
const myLocalObjectData = JSON.parse(localStorage.getItem("local_Object_Data"));
console.log(myLocalObjectData);

const key = localStorage.key(0); //visszaadja a 0. kulcs nevét
console.log(key);

const keylength = localStorage.length; //visszaadja a kulcsok számát, hány darab elem van a storage-ban
console.log(keylength);

//localStorage.removeItem("local_Object_Data")  //eltávolítja a kiválasztott elemet, kulcsot a storage-ból
//localStorage.clear(); //törli a teljes storage-ot
