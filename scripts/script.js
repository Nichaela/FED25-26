const hamburgerButton = document.querySelector("header button");
const headerNav = document.querySelector("header nav");

hamburgerButton.onclick = toggleMenu;

function toggleMenu() {
  headerNav.classList.toggle("is-open");
}

