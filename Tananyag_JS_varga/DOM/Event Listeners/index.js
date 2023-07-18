document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");

    //több eseménykezelőt indít el, interaktivitást kezd a DOM-al
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener("click", (event) => {
    // event.stopPropagation(); a kiterjesztés megállításával csak ez az esemény fog bekövetkezni. A többi őt tartalmazó elemre(div, h2) a kiterjesztés megszakad
    //view.style.backgroundColor = "purple";
    // event.target.style.backgroundColor = "purple"; //ez esetben kattintanie kell az elemre, akkor működik

    //view.classList.add("purple"); //hozzáaadja a html elemet egy osztályhoz
    //view.classList.remove("darkblue"); //eltávolít egy elemet az osztályból
    view.classList.toggle("darkblue"); //átrakja darkblue osztályba a purple helyett
    view.classList.toggle("purple"); //átrakja purple osztályba a darkblue helyett
  });

  div.addEventListener("click", (event) => {
    // event.stopPropagation(); ide is rakhatjuk
    //  div.style.backgroundColor = "blue";
    event.target.style.backgroundColor = "blue"; //ez esetben kattintanie kell az elemre, akkor működik.Nem következik be automatikusan mindhárom esemény
  });

  h2.addEventListener("click", (event) => {
    // event.stopPropagation(); ide is rakhatjuk

    const myText = event.target.textContent; //elmentem a jelenlegi textContent tartalmat
    myText === "My 2n View!"
      ? (event.target.textContent = "Cliked") //megnézem a tartalmat ha az átírom, ha nem akkor visszaírom
      : (event.target.textContent = "My 2n View!");
  });

  ////////////////////////////////////////////////mouse events/////////////////////////////////////////
  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });

  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};
