/*** Script Tooltips ***/

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/*** Script Header Fixed ***/

const navFixed = document.getElementById("navFixed");
const mainCarouselWrapper = document.getElementById("mainCarouselWrapper");
let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
  if (scrollPos >= 30) {
    navFixed.classList.add("fixed-top", "active");
    mainCarouselWrapper.classList.add("mt-0");
  } else {
    navFixed.classList.remove("fixed-top", "active");
    mainCarouselWrapper.classList.remove("mt-0");
  }
}

window.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });
  }
  ticking = true;
});

/*** Script Countdown Launch ***/

const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
const updateTime = setInterval(function () {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector(".countdown.weeks .countdown-number").innerHTML =
    weeks;
  document.querySelector(".countdown.days .countdown-number").innerHTML = days;
  document.querySelector(".countdown.hours .countdown-number").innerHTML =
    hours;
  document.querySelector(".countdown.minutes .countdown-number").innerHTML =
    minutes;
  document.querySelector(".countdown.seconds .countdown-number").innerHTML =
    seconds;
});

/*** Script Carousel ***/

let currentIndex = 0;
const items = document.querySelectorAll(".carousel");

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
  document.querySelector(".carousel").style.transform = `translateX(-${
    index * 100
  }%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
}

// Agregar event listeners para los botones "Next" y "Prev"
document.getElementById("nextButton").addEventListener("click", nextSlide);
document.getElementById("prevButton").addEventListener("click", prevSlide);

// Cambio automático de diapositivas cada 5 segundos
setInterval(nextSlide, 5000);

// Carrussel productos destacados
