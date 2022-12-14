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
function async(ID) {
  modal.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loading.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerHTML = `Hello, ${ID}`;
  setTimeout(function Login(ID) {
    hiddenWrapper.classList.remove(BLUR_CLASSNAME);
    loading.classList.add(HIDDEN_CLASSNAME);
  }, 2000);
}

function onSubmit(event) {
  `    `;
  event.preventDefault();
  localStorage.setItem("username", loginInput.value);
  async(ID);
}

if (ID === null) {
  loginForm.addEventListener("submit", onSubmit);
} else {
  alreadyLogin(ID);
}
