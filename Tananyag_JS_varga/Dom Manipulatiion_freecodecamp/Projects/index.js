// Variables
/* 
let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    person: ` Mahatma Gandhi`,
  },
  {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    person: ` Albert Einstein`,
  },
  {
    quote: `"At his best, man is the noblest of all animals; separated from law and justice he is the worst."`,
    person: `Aristotle`,
  },
  {
    quote: `"Your time is limited, so dont waste it living someone else's life."`,
    person: ` Steve Jobs`,
  },
  {
    quote: `"Tell me and I forget. Teach me and I remember. Involve me and I learn."`,
    person: ` Benjamin Franklin`,
  },
  {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    person: `Oprah Winfrey`,
  },
  {
    quote: `"t does not matter how slowly you go as long as you do not stop."`,
    person: `Confucius`,
  },
  {
    quote: `"Our lives begin to end the day we become silent about things that matter."`,
    person: `Martin Luther King, Jr.`,
  },
  {
    quote: `"Remember that not getting what you want is sometimes a wonderful stroke of luck."`,
    person: `Dalai Lama`,
  },
  {
    quote: `"The journey of a thousand miles begins with one step."`,
    person: `Lao Tzu`,
  },
];

btn.addEventListener("click", function () {
  //véletlen szám generálása, ami a tömb elemszámát jelenti
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
 */

//Project 2
// let openBtn = document.getElementById("open-btn");
// let modalContainer = document.getElementById("modal-container");
// let closeBtn = document.getElementById("close-btn");

// Event Listeners

// openBtn.addEventListener("click", function () {
//   modalContainer.style.display = "block";
// });

// closeBtn.addEventListener("click", function () {
//   modalContainer.style.display = "none";
// });

// window.addEventListener("click", function (e) {
//   if (e.target === modalContainer) {
//     modalContainer.style.display = "none";
//   }
// });

//Project 3

// const accordion = document.getElementsByClassName("content-container");

// for (i = 0; i < accordion.length; i++) {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// }

//Project 4
// const startStopBtn = document.querySelector("#startStopBtn");
// const resetBtn = document.querySelector("#resetBtn");

// Variables for time values
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// Variables for leading zero
// let leadingSeconds = 0;
// let leadingMinutes = 0;
// let leadingHours = 0;

// Vairables for set interval & timerstatus
// let timerInterval = null;
// let timerStatus = "stopped";

// Stop Watch Function

// function stopWatch() {
//   seconds++;

//   if (seconds / 60 === 1) {
//     seconds = 0;
//     minutes++;

//     if (minutes / 60 === 1) {
//       minutes = 0;
//       hours++;
//     }
//   }

//   if (seconds < 10) {
//     leadingSeconds = "0" + seconds.toString();
//   } else {
//     leadingSeconds = seconds;
//   }

//   if (minutes < 10) {
//     leadingMinutes = "0" + minutes.toString();
//   } else {
//     leadingMinutes = minutes;
//   }

//   if (hours < 10) {
//     leadingHours = "0" + hours.toString();
//   } else {
//     leadingHours = hours;
//   }

//   let displayTimer = (document.getElementById("timer").innerText =
//     leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
// }

// startStopBtn.addEventListener("click", function () {
//   if (timerStatus === "stopped") {
//     timerInterval = window.setInterval(stopWatch, 1000);
//     document.getElementById(
//       "startStopBtn"
//     ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
//     timerStatus = "started";
//   } else {
//     window.clearInterval(timerInterval);
//     document.getElementById(
//       "startStopBtn"
//     ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
//     timerStatus = "stopped";
//   }
// });

// resetBtn.addEventListener("click", function () {
//   window.clearInterval(timerInterval);
//   seconds = 0;
//   minutes = 0;
//   hours = 0;

//   document.getElementById("timer").innerHTML = "00:00:00";
// });

//Project 5
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

// Event Listener for Add Button

addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);

  let checkButton = document.createElement("button");
  checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);

  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    taskContainer.appendChild(task);
  }

  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;

    target.parentElement.parentElement.remove();
  });
});
