const HELLO = "Hello!";
const app = document.getElementById("app");
const title = document.createElement("h1");
title.innerHTML = HELLO;
app.appendChild(title);

const colors = ["red", "blue", "yellow", "purple"];

function superEventHandler(event) {
  let bool = false;
  if (event.type == "mouseenter") {
    title.innerHTML = "The Mouse is Here.";
    title.style.color = colors[0];
  } else if (event.type == "mouseleave") {
    title.innerHTML = "The Mouse is Gone.";
    title.style.color = colors[1];
  } else if (event.type == "resize") {
    title.innerHTML = "You just resized.";
    title.style.color = colors[2];
  } else if (event.type == "contextmenu") {
    title.innerHTML = "That was right Click!";
    title.style.color = colors[3];
  }
}

title.addEventListener("mouseenter", superEventHandler);
title.addEventListener("mouseleave", superEventHandler);
window.addEventListener("resize", superEventHandler);
window.addEventListener("contextmenu", superEventHandler);
