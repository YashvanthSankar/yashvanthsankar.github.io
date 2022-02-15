const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", show);

function show() {
  navMenu.classList.add("show");
}
