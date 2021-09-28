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
const afternoon = document.querySelector(".afternoon");
const partyTime = document.querySelector(".party");
let imageChange = document.getElementById("imageChange");
let textChange = document.querySelector(".lunch").childNodes;
partyTime.addEventListener("click", change);
function change() {
  let imageChange = document.getElementById("imageChange");
  let textChange = document.querySelector(".lunch").childNodes;
  imageChange.src = "./images/party2.svg";
  imageChange.style.height = "340px";
  textChange[1].innerHTML = "Party Time !!";
  partyTime.innerHTML = "Double click to end party";
  afternoon.innerHTML = "PARTY TIME !!";
}

partyTime.addEventListener("dblclick", picture);
function picture() {
  const date = new Date();
  const h = date.getHours();
  if (h >= 7 && h <= 10) {
    imageChange.src = "./images/morning.png";
    imageChange.style.height = "290px";
    textChange[1].innerHTML = "WAKE UP !!";
    partyTime.innerHTML = "Party time!";
    afternoon.innerHTML = "GOOD MORNING !!";
  }
  if (h >= 10 && h <= 18) {
    textChange[1].innerHTML = "LET'S HAVE SOME LUNCH !!";
    imageChange.src = "./images/lunch.png";
    partyTime.innerHTML = "Party time!";
    afternoon.innerHTML = "GOOD AFTERNOON !!";
  }
  if (h >= 18 && h <= 24) {
    textChange[1].innerHTML = "GOOD NIGHT !!";
    imageChange.src = "./images/night.png";
    partyTime.innerHTML = "Party time!";
    afternoon.innerHTML = "GOOD NIGHT !!";
  }
}
picture();

const wakeup = document.getElementById("wakeUp");
wakeup.addEventListener("change", () => {
  imageChange.src = "./images/morning.png";
  imageChange.style.height = "290px";
  textChange[1].innerHTML = "WAKE UP !!";
  partyTime.innerHTML = "Party time!";
  afternoon.innerHTML = "GOOD MORNING !!";
});
const afterNoon = document.getElementById("lunchTime");
afterNoon.addEventListener("change", () => {
  textChange[1].innerHTML = "LET'S HAVE SOME LUNCH !!";
  imageChange.src = "./images/lunch.png";
  partyTime.innerHTML = "Party time!";
  afternoon.innerHTML = "GOOD AFTERNOON !!";
});
const night = document.getElementById("night");
night.addEventListener("change", () => {
  textChange[1].innerHTML = "GOOD NIGHT !!";
  imageChange.src = "./images/night.png";
  partyTime.innerHTML = "Party time!";
  afternoon.innerHTML = "GOOD NIGHT !!";
});
