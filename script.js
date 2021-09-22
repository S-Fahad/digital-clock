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
