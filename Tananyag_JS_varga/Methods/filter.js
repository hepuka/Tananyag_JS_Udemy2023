let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const users = [
  {
    name: "Zoltán",
    email: "kunzoltan@outlook.hu",
    username: "administrator",
    role: "Admin",
    pincode: 770718,
  },
  {
    name: "Petike",
    email: "petike@outlook.hu",
    username: "manager",
    role: "Admin",
    pincode: 123456,
  },
  {
    name: "Katika",
    email: "katika@outlook.hu",
    username: "felszolgalo1",
    role: "Alap",
    pincode: 158965,
  },
  {
    name: "Panka",
    email: "panka@outlook.hu",
    username: "felszolgalo2",
    role: "Alap",
    pincode: 781296,
  },
];

const adminok = users.filter((element) => element.role === "Admin");
//console.log(adminok);
//console.log(JSON.stringify(adminok));

let even_numbers = numbers.filter((num) => num % 2 === 0);
console.log(even_numbers);
