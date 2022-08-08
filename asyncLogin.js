const modal = document.querySelector("#modal");
const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const LoginButton = document.querySelector("#login_form button");
const hiddenWrapper = document.querySelector(".main_wrap");
const greeting = document.querySelector("#greeting");
const loading = document.querySelector(".hourglass");

const HIDDEN_CLASSNAME = "hidden";
const BLUR_CLASSNAME = "blur";
const USERNAME_KEY = "username";
const ID = localStorage.getItem(USERNAME_KEY);

function alreadyLogin(ID) {
  greeting.innerHTML = `Hello, ${ID}`;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  modal.classList.add(HIDDEN_CLASSNAME);
  hiddenWrapper.classList.remove(BLUR_CLASSNAME);
}
async function load() {
  loading.classList.remove(HIDDEN_CLASSNAME);
  setTimeout(() => {
    loading.classList.add(HIDDEN_CLASSNAME);
  }, 2000);
}
function loaded() {
  hiddenWrapper.classList.remove(BLUR_CLASSNAME);
}

async function onSubmit(event) {
  event.preventDefault();
  localStorage.setItem("username", loginInput.value);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  modal.classList.add(HIDDEN_CLASSNAME);
}

if (ID === null) {
  loginForm.addEventListener("submit", onSubmit.then(load().then(loaded())));
} else {
  alreadyLogin(ID);
}
