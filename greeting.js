const form = document.querySelector(".js-userForm"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

function askForName() {
  form.classList.add("show");
  form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  saveName(currentValue);
  showGreeting(currentValue);
}

function saveName(text) {
  localStorage.setItem("name", text);
}

function showGreeting(text) {
  form.classList.remove("show");
  greeting.classList.add("show");
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const userName = localStorage.getItem("name");
  if (userName === null) {
    askForName();
  } else {
    showGreeting(userName);
  }
}

function init() {
  loadName();
}
init();
