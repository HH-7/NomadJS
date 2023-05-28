const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("login");
const loginAfter = document.getElementById("login-after");
const greeting = document.getElementById("greeting");
const clock = document.getElementById("clock");

const date = new Date();

const HIDDEN_CLASSNAME = "hidden";
const FLEX_CLASSNAME = "flex";
const USERNAME_KEY = "username";

function enterKey(event) {
  if (window.event.keyCode === 13) {
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
  }
}

function paintGreeting(username) {
  getClock();
  let welcomgreeting;

  if (5 <= date.getHours() && date.getHours() < 10) {
    welcomgreeting = "Good morning";
  } else if (10 <= date.getHours() && date.getHours() < 17) {
    welcomgreeting = "Good afternoon";
  } else if (17 <= date.getHours() && date.getHours() < 22) {
    welcomgreeting = "Good evening";
  } else {
    welcomgreeting = "Good night";
  }

  greeting.innerText = `${welcomgreeting}, ${username}`;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(FLEX_CLASSNAME);
  loginAfter.classList.remove(HIDDEN_CLASSNAME);
  loginAfter.classList.add(FLEX_CLASSNAME);
}

function getClock() {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(FLEX_CLASSNAME);
  loginAfter.classList.remove(FLEX_CLASSNAME);
  loginForm.addEventListener("keyup", enterKey);
} else {
  paintGreeting(savedUsername);
}
