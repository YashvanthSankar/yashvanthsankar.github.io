// Hamburger menu
function navToggle(element) {
  element.classList.toggle("open");

  document.getElementById("menu").classList.toggle("hidden");
}

// Scroll to top button
const scrollTop = document.querySelector(".scroll-top-btn");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollTop.classList.add("active");
  } else {
    scrollTop.classList.remove("active");
  }
});
