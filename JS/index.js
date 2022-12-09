window.onscroll = function () {
  myfunction();
};

var navbar = document.getElementById("navbar");
var stiky = navbar.offsetTop;

function myfunction() {
  if (window.pageYOffset >= stiky) {
    navbar.classList.add("stiky");
  } else {
    navbar.classList.remove("stiky");
  }
}

// Hambuger Menu

const menu = document.querySelector(".menu input");
const nav = document.querySelector("nav ul");

menu.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
