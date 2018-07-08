function formatTime(t) {
  return t < 10 ? '0' + t : '' + t;
}

var clockNode = document.getElementById('clock');

function updateClock() {
  var now = new Date();

  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

  var time = formatTime(h) + ':' + formatTime(m) + ':' + formatTime(s);
  clockNode.innerHTML = time;
}

setInterval(function() {
  updateClock();
}, 1000);

updateClock();
