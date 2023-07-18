let render = document.getElementById("myTable");
let add = document.getElementById("btn");
//import { fs } from "/fs";

fetch("./users.json")
  .then((response) => response.json())
  .then((users) => {
    console.log(users);
    users.map((data) => {
      render.append(tadmin(data));
    });
  });

function tadmin({ name, username, email, phone }) {
  let tr = document.createElement("tr");

  tr.innerHTML = `
  <tr>
      <td>${name}</td>
      <td>${username}</td>
      <td>${email}</td>
      <td>${phone}</td>    

  </tr>`;
  return tr;
}

const datas = {
  id: 13,
  name: "ewhfuw uwefhwhef",
  username: "efwfwfewf",
  email: "Sinwefwfcere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-774356349346583740-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

add.addEventListener("click", function () {
  fs.writeFile("./users.json", JSON.stringify(datas), (err) => {
    if (err) throw err;

    console.log("done writing...");
  });
});
