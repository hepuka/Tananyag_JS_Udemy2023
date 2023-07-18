/* 

    async: 

    - kiíródik az első és a harmadik, 2 mp után a második is
    - a js nem várja meg az első után, hogy a másodiknál a 2 mp lejárjon, hanem utána kiírta a hármat
    - majd a 2 mp letelte után a harmadik után kiírta a másodikat

*/

const elso = () => {
  console.log("első");
  masodik();
  console.log("harmadik");
};

const masodik = () => {
  setTimeout(() => {
    console.log("async második");
  }, 3000);
};

elso();
