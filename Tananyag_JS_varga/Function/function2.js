function leglalapKeruletTerulet(a, b, funkcio) {
  let eredmeny;

  if (funkcio === "kerület") {
    eredmeny = (a + b) * 2;
  } else if (funkcio === "terület") {
    eredmeny = a * b;
  } else {
    return "Hibás funkció";
  }

  return `${funkcio} = ${eredmeny}`;
}

console.log(leglalapKeruletTerulet(5, 4, "kerület"));
