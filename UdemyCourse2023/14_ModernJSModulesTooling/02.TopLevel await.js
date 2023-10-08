//Top-Level Await (ES2022)
//await kulcsszó használata module-ban, az async függvényen kívül

console.log('Start fetching');
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await res.json();
console.log(data);
console.log('Something');

//top-level await használta async függvényen kívül
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  //csak az utolsó elem címét és tartalmát íratjuk ki
  return { title: data.at(-1).title, text: data.at(-1).body };
};

//await nélkül csak a promise van meg, az objektum nem. Azért mert az async függvény hívása egy promise-al tér vissza,nem az aktuális adattal
const lastPost = getLastPost();
console.log(lastPost);

//top-level await használatával kapjuk meg az adatot
const lastPost2 = await getLastPost();
console.log(lastPost2);
