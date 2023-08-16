const email = "aaa@ede";

console.log(email.indexOf("@"));

console.log(
  email[Math.floor(email.length / 2)] === "@" && email.length % 2 == 1
);
