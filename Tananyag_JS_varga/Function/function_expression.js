var fly = function () {
  console.log("you are flying");
};

fly();

var player = {
  x: 10,
  y: 20,
  energy: 100,
  superpower: function () {
    console.log("no superpower");
  },
};

player.x = 100;
player.y = 1000;
player.superpower = fly;
player.superpower();

console.log(player);

//////////////////////////////////////////////////////////////////////

function throwDie(num) {
  for (let i = 0; i < num; i++) {
    rollDie();
  }
}

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;

  console.log(roll);
}

throwDie(2);
