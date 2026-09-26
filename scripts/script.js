// credits: https://blog.pope.tech/2025/12/08/design-accessible-animation-and-movement/#implementing

// hamburger menu
const hamburgerBtn = document.querySelector("header nav button");
const headerNav = document.querySelector("header nav");

//reduce motion
const reduceBtn = document.getElementById('reduceBtn');
const enableBtn = document.getElementById('enableBtn');

var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

hamburgerBtn?.addEventListener('click', toggleMenu);

// hamburger menu
function toggleMenu() {
  hamburgerBtn.classList.toggle("is-open")
}



/****************************/
/*  tutorial reduce motion  */
/****************************/



function updateControlState() {
  if (prefersReducedMotion.matches) {
    // Reduced-motion users already get animation disabled in CSS
    showButton(true);
  } else {
    showButton(false);
  }
}

updateControlState();

function showButton(bool) {
  if (bool === true) {
    document.body.classList.add("paused");
    reduceBtn.classList.add("visually-hidden");
    enableBtn.classList.remove("visually-hidden");
  }
  else if (bool === false) {
    document.body.classList.remove("paused");
    reduceBtn.classList.remove("visually-hidden");
    enableBtn.classList.add("visually-hidden");
  }
}

reduceBtn.addEventListener("click", function () {
  showButton(true);
});

enableBtn.addEventListener("click", function () {
  showButton(false);
});

prefersReducedMotion.addEventListener("change", () => {
  updateControlState();

});


