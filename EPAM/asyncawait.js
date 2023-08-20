// let logMovies = async function () {
//   const response = await fetch("http://example.com/movies.json");
//   const data = await response.json();
//   console.log(data);
// };
//
// logMovies();

let promise = new Promise(function (resolve, reject) {
  resolve("Resolved!");
  reject(new Error("Something is not right!"));
});
promise.then((r) => console.log(r));
