const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); //json formátummá kell alakítani a respons-ban kapott ReadableStream formátumot
  })
  .then((data) => {
    data.forEach((user) => {
      //console.log(user)
    });
  });

//Async / Await

const myUsers = {
  userList: [],
};

/*const myCoolFunction = async () =>{

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    //console.log(jsonUserData)

    return jsonUserData;
}*/

//myCoolFunction();

/*const anotherFunction = async () =>{

    const data= await myCoolFunction();
    myUsers.userList=data;
    console.log(myUsers.userList)
}

anotherFunction();*/

//console.log(myUsers.userList); // ez itt üres tömböt ad vissza, mert hamarabb lefut, minthogy az anotherFunction(); végetérne

///workflow function

const getAllUserEmails = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getAllUserEmails();

///2nd parameter of fetch is an object

const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const jsonJokeData = await response.json();

  console.log(jsonJokeData);
  console.log(jsonJokeData.joke);
};

/////////////////////////////////////////text json helyett////////////////////////////////////////
const getDadJoke2 = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  });
  const textJokeData = await response.text();

  console.log(textJokeData);
};

getDadJoke2();

/////////////////////////////////////////POST DATA///////////////////////////////////////

const jokeObj = {
  id: "6327848vc2bc42",
  joke: "bla bla bla",
};

///////CREATE API////////////
const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse);
};

postData(jokeObj);
