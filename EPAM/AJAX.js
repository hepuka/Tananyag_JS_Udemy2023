//https://www.youtube.com/watch?v=4K33w-0-p2c

const sendHttpRequest = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.spacexdata.com/v4/dragons");
  xhr.responseType = "json";
  xhr.onload = () => {
    const dragons = xhr.response;
    console.log(dragons);
  };
  xhr.send();
};

const getData = () => {
  sendHttpRequest("GET", "https://api.spacexdata.com/v4/dragons");
};

getData();

//2.pld
const request = new XMLHttpRequest();
request.open("GET", "https://api.spacexdata.com/v4/dragons");
request.responseType = "json";
request.send();

request.addEventListener("load", function () {
  console.log(this.response);
});

async function fetchResult() {
  const response = await fetch("https://api.spacexdata.com/v4/dragons");
  const data = await response.json();
  return data;
}

fetchResult().then((r) => console.log(r));

//FETCH API
fetch("https://api.spacexdata.com/v4/dragons")
  .then((response) => response.json())
  .then((data) => console.log(data));
