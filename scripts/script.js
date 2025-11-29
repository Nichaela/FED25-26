
// hamburger menu
const hamburgerButton = document.querySelector("header button");
const headerNav = document.querySelector("header nav");

// hero carousel
const carousel = document.querySelector('main section:nth-of-type(1) ul.hero-carousel');
const slides = Array.from(carousel.children);

hamburgerButton.onclick = toggleMenu;

// hamburger menu
function toggleMenu() {
  headerNav.classList.toggle("is-open");
}

// zorgt er voor dat de zijkanten blurry zijn
function updateActiveSlide() {
  const carouselRect = carousel.getBoundingClientRect();
  const centerX = carouselRect.left + carouselRect.width / 2;

  let closestSlide = null;
  let closestDistance = Infinity;

  slides.forEach(slide => {
    const rect = slide.getBoundingClientRect();
    const slideCenter = rect.left + rect.width / 2;
    const distance = Math.abs(slideCenter - centerX);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestSlide = slide;
    }
  });

  slides.forEach(slide => {
    slide.classList.toggle('is-active', slide === closestSlide);
  });
}

carousel.addEventListener('scroll', () => {
  window.requestAnimationFrame(updateActiveSlide);
});

window.addEventListener('load', updateActiveSlide);
window.addEventListener('resize', updateActiveSlide);