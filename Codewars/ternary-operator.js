//https://www.codewars.com/kata/58649884a1659ed6cb000072/train/javascript
function updateLight(current) {
  return current === "green"
    ? "yellow"
    : current === "yellow"
    ? "red"
    : current === "red"
    ? "green"
    : "";
}
const updateLight = (current) =>
  ({
    green: "yellow",
    yellow: "red",
    red: "green",
  }[current]);
console.log(updateLight("yellow"));

function getGrade(s1, s2, s3) {
  const s = (s1 + s2 + s3) / 3;

  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";

  // return s >= 0 && s < 60
  //   ? "F"
  //   : s >= 60 && s < 70
  //   ? "D"
  //   : s >= 70 && s < 80
  //   ? "C"
  //   : s >= 80 && s < 90
  //   ? "B"
  //   : s >= 90 && s <= 100
  //   ? "A"
  //   : null;
}

console.log(getGrade(70, 70, 100));

function peopleWithAgeDrink(age) {
  return age < 14
    ? "drink toddy"
    : age < 18
    ? "drink coke"
    : age < 21
    ? "drink beer"
    : "drink whisky";
}

console.log(peopleWithAgeDrink(21));

function uefaEuro2016(teams, scores){

    const [team1, team2] = teams
    const [score1, score2] = scores
    const winner = score1 > score2 ? team1 : team2

    return score1 === score2
        ? `At match ${team1} - ${team2}, teams played draw.`
        : `At match ${team1} - ${team2}, ${winner} won!`
}
console.log(uefaEuro2016(['Germany', 'Ukraine'], [3, 3]));

