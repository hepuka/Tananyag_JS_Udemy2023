future = new Date(2037, 10, 19, 15, 23);
//számmá konvertálom a date-et, milliseconds formában tárolja
console.log(+future);

//mivel számmá (timestamp milliseconds-ben) van konvertálva így műveleteket is hajthatunk végre
//visszaadja hogy hánynap telt el a két idő között
const calcDaysPassed = (date1, date2) =>
  //el kell osztani mert enélkül millisecundumban kapjuk meg az értéket

  //az osztás a végén 24 mert 1 nap 24 óra, 60 perc 1 óra, 60 mp 1 perc és 1000 millisecindum 1 mp
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(now, new Date(2005, 5, 15));
console.log(days1);
