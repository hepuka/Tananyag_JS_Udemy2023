const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};
console.log(adventurer.cat.name);

const dogName = adventurer.dog?.name;
console.log(dogName);

//metódus ellenőrzése, hogy létezik-e az object-ben
console.log(adventurer.someNonExistentMethod?.());
