const avgDolphinsScore = (96 + 108 + 89) / 3;
const avgKoalasScore = (88 + 91 + 110) / 3;
console.log(avgDolphinsScore, avgKoalasScore);

if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore >= 100) {
  console.log("DolphinsScoreaverage is the winner");
} else if (avgKoalasScore > avgDolphinsScore && avgKoalasScore >= 100) {
  console.log("KoalasScoreaverage is the winner");
} else if (
  avgDolphinsScore === avgKoalasScore &&
  avgDolphinsScore >= 100 &&
  avgKoalasScore >= 100
) {
  console.log("Both of them win the trophy");
} else {
  console.log("No one wins the trophy");
}
