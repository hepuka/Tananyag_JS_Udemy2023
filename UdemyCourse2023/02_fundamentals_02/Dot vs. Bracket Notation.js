const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2022 - 1977,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas?.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = "job";
// obejktum egy property-t a []-el lehet adni, ha az változó.
if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

//további property-k hozzáadása az objektumhoz
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
