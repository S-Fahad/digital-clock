function clock() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  var ses = "AM";

  if (h >= 12) {
    ses = "PM";
  }
  if (h > 12) {
    h = h - 12;
  }
  if (h == 0) {
    h = 12;
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  document.getElementById("hour").innerHTML = h;
  document.getElementById("minute").innerHTML = m;
  document.getElementById("second").innerHTML = s;
  document.getElementById("session").innerHTML = ses;
  setTimeout(clock, 1000);
}
clock();

const code = document.querySelector(".code");
const partyTime = document.querySelector(".party");
const imageChange = document.getElementById("imageChange");
const textChange = document.querySelector(".lunch").childNodes;

const wakeup = document.getElementById("wakeUp");
const afterNoon = document.getElementById("lunchTime");
const night = document.getElementById("night");
const h = new Date().getHours();

function prty() {
  partyTime.innerHTML = " Party Time";
  imageChange.src = "./images/default.jpg";
  imageChange.style.height = "300px";
  textChange[1].innerHTML = "Let's Code !!";
  code.innerHTML = "Coding Time !!";
}

function wake() {
  if (h == wakeup.value) {
    imageChange.src = "./images/morning.png";
    textChange[1].innerHTML = "Wake Up !!";
    code.innerHTML = "GOOD MORNING !!";
  } else {
    prty();
  }
}
function lunchBreak() {
  if (h == afterNoon.value) {
    imageChange.src = "/images/lunch.png";
    textChange[1].innerHTML = "Let's have some lunch !!";
    code.innerHTML = "GOOD AFTERNOON !!";
  } else {
    prty();
  }
}
function evening() {
  if (h == night.value) {
    imageChange.src = "/images/night.png";
    textChange[1].innerHTML = "Nap Time !!";
    code.innerHTML = "GOOD EVENING !!";
  } else {
    prty();
  }
}
wakeup.addEventListener("change", wake);
afterNoon.addEventListener("change", lunchBreak);
night.addEventListener("change", evening);

//party
let isParty = true;
partyTime.addEventListener("click", change);
function change() {
  if (isParty) {
    partyTime.innerHTML = "End Party !";
    imageChange.src = "./images/party2.svg";
    imageChange.style.height = "300px";
    textChange[1].innerHTML = "Let's party all night !!";
    code.innerHTML = "PARTY TIME !!";
  } else {
    prty();
  }
  isParty = !isParty;
}
