// Basic Array Operations (Methods)
// Add elements
const newLength = friends.push("Hepu");
console.log(friends);
console.log(newLength);

friends.unshift("John"); //tömb elejére rakja be az új elemet
console.log(friends);

// Remove elements
friends.pop(); // utolsó elemet törli
console.log(friends);

friends.shift(); // első elemet törli
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} else {
  console.log("No friend!");
}
