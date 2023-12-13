var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
var typed = new Typed("#element-self", {
  strings: [
    "Programmer,",
    "Video Editor,",
    "Gamer,",
    "Web Developer,",
    "Tech Enthusiast....",
  ],
  typeSpeed: 50,
});
