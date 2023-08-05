// const msg1 = () => {
//   console.log("1.message");
// };
// const msg2 = () => {
//   console.log("2.message");
// };
// const msg3 = () => {
//   console.log("3.message");
// };
// const msg4 = () => {
//   console.log("4.message");
// };
//
// (function () {
//   (function () {
//     (function () {
//       setTimeout(msg4, 500);
//       console.log("msg4 out");
//     })();
//
//     setTimeout(msg2, 2000);
//     console.log("msg2 out");
//   })();
//
//   setTimeout(msg3, 1000);
//   console.log("msg3 out");
// })();

//2mp után lefut a for ciklus
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }

function sleep(delay, initialTime = Date.now()) {
  while (Date.now() < initialTime + delay);
  console.log("sleep function running");
}

//recursive setTimeOut()
let ticks = 0;
let sleepTime = 30;
const cageSays = function () {
  console.log(ticks, "starting", new Date().getMilliseconds());
  sleep(sleepTime);
  console.log(ticks, "ending", new Date().getMilliseconds());

  if (ticks < 6) {
    setTimeout(cageSays, 1000);
  }

  ticks++;
};

cageSays();
