const clock = document.querySelector("#header_right span:last-child");
function getClock() {
  // console.log(`${hour}:${min}:${sec}`);
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);
