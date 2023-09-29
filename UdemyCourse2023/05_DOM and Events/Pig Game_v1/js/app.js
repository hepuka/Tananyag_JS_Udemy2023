/*
math.floor-al kerekítünk lefelé, Math.cell-el felfelé
kocka = Math.floor(Math.random() * 6) + 1; //1-6 közötti számot ad, +1 kell mert nulla nem lehet a kocka értéke
*/
//a 2 játékos összpontszámát egy tömbben tárolom

var pontszamok, korpontszam, aktivJatekos, jatekFolyamatban;

init();

/* var elsoJatekosNeve = document.querySelector("#name-0").innerHTML;
console.log(elsoJatekosNeve); */

//DOBÁS gomb eseménykezelője
document.querySelector(".btn-roll").addEventListener("click", () => {
  if (jatekFolyamatban) {
    //véletlenszám generálása
    let kocka = Math.floor(Math.random() * 6) + 1;
    document.querySelector(".btn-hold").hidden = false;

    //véletlen szám alapján a kocka értékének megjelenítése középen
    document.querySelector(".dice").style.display = "block";
    document.querySelector(".dice").src = "img/dice-" + kocka + ".png";

    //a kör aktuális pontszámának frissítése, ha nem 1-et dobunk
    if (kocka != 1) {
      //itt adjuk hozzá a számot az aktuális ponthoz
      korpontszam += kocka;

      //aktívjátkos változó értéke adja meg, hogy mi lesz az id utolsó karaktere
      document.querySelector("#current-" + aktivJatekos).innerHTML =
        korpontszam;
    } else {
      //következő játékosra váltás az aktívjátékos változó értékének módosítása

      kovetkezoJatekos();
    }
  }
});

//MEGTARTOM gomb eseménykezelője
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (jatekFolyamatban) {
    //körpontszám hozzáadása az aktív játékos összes pontszámához

    pontszamok[aktivJatekos] += korpontszam;

    document.querySelector("#score-" + aktivJatekos).textContent =
      pontszamok[aktivJatekos];

    //nyert a játékos?

    if (pontszamok[aktivJatekos] >= 100) {
      document.querySelector("#name-" + aktivJatekos).textContent = "Nyertél!";
      document
        .querySelector(".player-" + aktivJatekos + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + aktivJatekos + "-panel")
        .classList.remove("active");
      jatekFolyamatban = false;
      document.querySelector(".btn-roll").hidden = true;
      document.querySelector(".btn-hold").hidden = true;
      document.querySelector(".btn-new").hidden = false;
      document.querySelector(".dice").style.display = "none";
      document.getElementById("current-0").innerHTML = 0;
      document.getElementById("current-1").innerHTML = 0;
    } else {
      //következő játékos
      kovetkezoJatekos();
    }
  }
});

//következő játékos
function kovetkezoJatekos() {
  aktivJatekos === 0 ? (aktivJatekos = 1) : (aktivJatekos = 0);
  korpontszam = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  //aktuális játékos felületének jelölése
  //az active class-t kell levenni és a másikhoz átrakni a player panelen

  //toggle metódus oda-vissza kapcsolgatja az active osztályt a 2 játékos között
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //kocka elrejtése ha a játkos 1-et dob
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".btn-hold").hidden = true;
}

//új játék indítása
document.querySelector(".btn-new").addEventListener("click", init);

//init
function init() {
  let jatekos_1 = prompt("1.játékos neve");
  let jatekos_2 = prompt("2. játékos neve");
  document.getElementById("name-0").innerHTML = jatekos_1;
  document.getElementById("name-1").innerHTML = jatekos_2;

  pontszamok = [0, 0];
  korpontszam = 0;
  aktivJatekos = 0;
  jatekFolyamatban = true;

  //Kocka elrejtése a játéktér közepéről
  document.querySelector(".dice").style.display = "none";
  document.querySelector(".btn-roll").hidden = false;
  document.querySelector(".btn-new").hidden = true;
  document.querySelector(".btn-hold").hidden = true;
  //pontszámok kezdeti kinullázása
  document.getElementById("score-0").innerHTML = 0;
  document.getElementById("score-1").innerHTML = 0;
  document.getElementById("current-0").innerHTML = 0;
  document.getElementById("current-1").innerHTML = 0;

  /*  document.querySelector('#name-0').textContent='1.játékos';
  document.querySelector('#name-1').textContent='2.játékos';*/
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
  document.querySelector(".btn-hold").style.display = "disable"; //ezt lehetne az init-be is???????????????????????????????????
}

//SAJÁT RÉSZ

/*  if(aktivJatekos === 0) {


    kor1+=korpontszam;

    document.querySelector('#score-0').innerHTML=kor1;
    document.getElementById('current-0').textContent='0';
    kockaDOM.style.display = "none";

    if(kor1>=100){
      document.querySelector('#score-0').innerHTML=kor1;
      document.getElementById('current-0').textContent='0';
      alert("NYERTÉL!");

      document.getElementById("score-0").innerHTML = 0;
      document.getElementById("current-0").innerHTML = 0;
      document.getElementById("score-1").innerHTML = 0;
      document.getElementById("current-1").innerHTML = 0;
      kockaDOM.style.display = "none";
      aktivJatekos=0;
    }



  }else if(aktivJatekos === 1){

    kor2+=korpontszam;

    document.querySelector('#score-1').innerHTML=kor2;
    document.getElementById('current-1').textContent='0';
    kockaDOM.style.display = "none";

    if(kor2>=100){
      document.querySelector('#score-1').innerHTML=kor2;
      document.getElementById('current-1').textContent='0';
      alert("NYERTÉL!");
      document.getElementById("score-0").innerHTML = 0;
      document.getElementById("current-0").innerHTML = 0;
      document.getElementById("score-1").innerHTML = 0;
      document.getElementById("current-1").innerHTML = 0;
      kockaDOM.style.display = "none";
      aktivJatekos=0;
    }



  }
  document.querySelector(".btn-hold").hidden=true;
  aktivJatekos === 0 ? aktivJatekos=1 : aktivJatekos=0;
  korpontszam=0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');*/
