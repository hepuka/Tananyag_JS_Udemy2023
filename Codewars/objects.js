const cannonsReady = (gunners) => {
  return Object.values(gunners).some((m) => m === "nay")
    ? "Shiver me timbers!"
    : "Fire!";

  // let length = Object.keys(gunners).length;
  // let total = 0;

  // for (let i in gunners) {
  //   gunners[i] == "aye" ? total++ : 0;
  // }
  // return total == length ? "Fire!" : "Shiver me timbers!";

  // return Object.values(gunners).includes("nay")
  //   ? "Shiver me timbers!"
  //   : "Fire!";
};

let a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
let b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };

console.log(cannonsReady(a));
console.log(cannonsReady(b));

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";

  let rule = { rock: "scissors", paper: "rock", scissors: "paper" };

  //ha p2 megegyezik a p1 értékével
  if (p2 === rule[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

console.log(rps("rock", "scissors"));
console.log(rps("scissors", "rock"));
