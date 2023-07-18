const btn2 = document.querySelector(".btn-2");

btn2.addEventListener("click", () => {
  alert("This is btn2");
});

//mouseover
const newBackgroundColor = document.querySelector(".box-3");

newBackgroundColor.addEventListener("mouseover", () => {
  newBackgroundColor.style.backgroundColor = "red";
});

//hidden content part
const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

const revealContent = () => {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
};

revealBtn.addEventListener("click", revealContent);
