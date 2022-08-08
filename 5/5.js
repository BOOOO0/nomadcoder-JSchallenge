const body = document.body;

var x = window.innerWidth;

function onResize() {
  x = window.innerWidth;
  if (x < 900) {
    body.classList.remove("orange");
    body.classList.remove("purple");
    body.classList.add("blue");
  } else if (x >= 900 && x <= 1020) {
    body.classList.remove("orange");
    body.classList.remove("blue");
    body.classList.add("purple");
  } else if (x >= 1020) {
    body.classList.remove("purple");
    body.classList.add("orange");
  }
}

window.addEventListener("resize", onResize);
