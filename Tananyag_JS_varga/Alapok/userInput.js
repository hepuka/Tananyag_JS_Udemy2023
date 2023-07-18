//egy felugró ablakban lévő feltétel eredményét adja vissza
let result = confirm("OK === True\nCancel === False");

if (result) {
  console.log("A feltételt elfogadta!");
} else {
  console.log("A feltételt visszautasította!");
}

//visszaadja felugróablakba beírt nevet
let name = prompt("Add meg a neved!");
console.log(name ? `A neved ${name}` : "Nem adtál meg nevet!");
