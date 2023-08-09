//Basic syntax is: $(selector).action()

$("#test").hide();
$(".test").hide();
console.log($("#test").text());
console.log($(".test").text());

//EVENTS
$("p").click(() => {
  console.log("Clicked on p element");
});

//CSS methods
$("#flip").click(() => {
  $("#panel").fadeToggle();
});

//DOM Manipulation

$(document).ready(() => {
  $("#btn3").click(() => {
    alert("HTML: " + $("#test").html());
  });
});
$("#btn1").click(() => {
  alert("This: " + $(this).text());
});
$("#btn2").click(() => {
  alert("Text: " + $("#test").text());
});

//Get and Set CSS Classes
$("#btn4").click(() => {
  $("h1,h2").addClass("blue");
  $("div").addClass("important");
});

$("#btn5").click(() => {
  $("p").toggleClass("toggle");
});

$("#btn6").click(() => {
  $("h1,h2").removeClass("blue");
  $("div").removeClass("important");
});

$(document).ready(function () {
  $("span").parent().css({ color: "red", border: "2px solid red" });
});

$(document).ready(function () {
  $("div").find("span").css({ color: "blue", border: "2px solid blue" });
});

//AJAX REQUEST
$(document).ready(function () {
  $("#btn7").click(function () {
    //The load() method loads data from a server
    //and puts the returned data into the selected element.
    $("#div1").load(
      "https://api.spacexdata.com/v4/dragons",
      function (responseTxt, statusTxt, xhr) {
        if (statusTxt === "success") console.log(JSON.parse(responseTxt));
        if (statusTxt === "error")
          alert("Error: " + xhr.status + ": " + xhr.statusText);
      },
    );
  });
});

$("#btn8").click(function () {
  $.get("https://api.spacexdata.com/v4/dragons", function (data, status) {
    console.log("Data: " + data + "\nStatus: " + status);
  });
});
