var time = 0;
var running = 0;
var button = document.getElementById('startPause'),
  el1 = document.getElementById('pig-leg-left-front'),
  el2 = document.getElementById('pig-leg-left-back'),
  el3 = document.getElementById('pig-tail'),
  el4 = document.getElementById('pig-body'),
  el5 = document.getElementById('pig-ear'),
  el6 = document.getElementById('pig-leg-right-front'),
  el7 = document.getElementById('pig-leg-right-back');

function startPause() {
  if (running == 0) {
    running = 1;
    increment();
    document.getElementById("startPause").innerHTML = "PAUSE";
    el1.classList.toggle('paused');
    el2.classList.toggle('paused');
    el3.classList.toggle('paused');
    el4.classList.toggle('paused');
    el5.classList.toggle('paused');
    el6.classList.toggle('paused');
    el7.classList.toggle('paused');
  } else {
    running = 0;
    document.getElementById("startPause").innerHTML = "RESUME";
    el1.classList.toggle('paused');
    el2.classList.toggle('paused');
    el3.classList.toggle('paused');
    el4.classList.toggle('paused');
    el5.classList.toggle('paused');
    el6.classList.toggle('paused');
    el7.classList.toggle('paused');
  }
}

function reset() {
  running = 0;
  time = 0;
  document.getElementById("startPause").innerHTML = "START";
  document.getElementById("output").innerHTML = "00:00:00";
}

function increment() {
  if (running == 1) {
    setTimeout(function() {
      time++;
      var mins = Math.floor(time / 10 / 60);
      var secs = Math.floor(time / 10 % 60);
      var tenths = time % 10;
      if (mins < 10) {
        mins = "0" + mins;
      }
      if (secs < 10) {
        secs = "0" + secs;
      }
      document.getElementById("output").innerHTML = mins + ":" + secs + ":" + "0" + tenths;
      increment();
    }, 100);
  }
}