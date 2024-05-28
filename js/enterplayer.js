let userName;

function getUserName(e) {
  e.preventDefault();
  userName = e.target["enter-name"].value;
  console.log(userName);
  window.open("./gamerules.html")
}

const form = document.querySelector(".enter-name-form");
form.addEventListener("submit", getUserName);

