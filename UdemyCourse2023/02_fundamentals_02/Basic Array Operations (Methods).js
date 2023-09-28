// Add elements
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

friends.push("Hepu");
console.log(friends);
console.log(friends.length);

friends.unshift("John"); //tömb elejére rakja be az új elemet
console.log(friends);

friends.pop(); // utolsó elemet törli
console.log(friends);

friends.shift(); // első elemet törli
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob")); //-1 mert nincs benne

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));
console.log(friends);

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} else {
  console.log("No friend!");
}
