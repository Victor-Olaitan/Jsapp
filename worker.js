let i = 0;

function timedCount() {
  i ++;
  postMessage(i);
  setTimeout("timedCount()",800);
}

timedCount();