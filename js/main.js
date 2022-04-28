//トグルボタンが押されたときに、クラスを付与
function addClass() {
  const nav = document.getElementsByClassName("nav");
  const nav_toggle = document.getElementsByClassName("nav_toggle");
  nav[0].classList.toggle("show");
  nav_toggle[0].classList.toggle("show");

  const header = document.getElementsByClassName("header");

  header[0].classList.toggle("active");
}

currentNum = 0;

function add() {
  const img = document.getElementById("img");
  const photes = ["img/8.png", "img/６.png"];

  img.src = photes[currentNum];
  currentNum++;
}
function back() {}

$(document).ready(function () {
  $(".slide").animate({ left: "+=840" }, 2000);
  $(".slide").animate({ left: "+=1680" }, 2000);
});

//カレンダー表示

// 'img/５.png','img/９.png'
