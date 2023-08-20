function add(number, callback) {
  const result = number * number;
  callback(result);
}

add(10, (result) => {
  console.log(`result: ${result}`);
});

function getData() {
  fetch("http://example.com/movies.json")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getData();

async function promiseObj() {
  let promiseobj = new Promise(function (resolve, reject) {
    resolve("Got the data");
  });
}

promiseObj();
