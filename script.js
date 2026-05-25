// =========================================
// SWIPER EVENTS CAROUSEL
// =========================================

window.eventSwiper = new Swiper(".mySwiper", {

  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },

});

// =========================================
// SWIPER MINISTRIES CAROUSEL
// =========================================

window.ministrySwiper = new Swiper(".ministrySwiper", {

  loop: true,
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".ministry-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      spaceBetween: 16,
    },
    768: {
      spaceBetween: 20,
    },
  },

});

// =========================================
// ACTIVE NAV LINK BASED ON SCROLL POSITION
// =========================================

// Select all nav links inside the glass navbar
const navLinks = document.querySelectorAll(".nav-glass a");

// Select each section that matches your nav links
const sections = document.querySelectorAll(
  "#home, #about, #mission, #volunteer, #events, #stories"
);

// Update active nav based on where user is scrolling
window.addEventListener("scroll", () => {

  // Stores the current active section id
  let currentSection = "";

  // Loop through each section
  sections.forEach(section => {

    // Section distance from top of page
    const sectionTop = section.offsetTop;

    // Section height
    const sectionHeight = section.offsetHeight;

    // Offset so nav updates a little before section fully reaches top
    const scrollPosition = window.scrollY + 180;

    // Check if user is inside this section
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }

  });

  // Loop through nav links
  navLinks.forEach(link => {

    // Remove active state from every link
    link.classList.remove("active-nav");

    // Get href without the #
    const linkSection = link.getAttribute("href").replace("#", "");

    // If nav link matches current section, activate it
    if (linkSection === currentSection) {
      link.classList.add("active-nav");
    }

  });

});


/* ========================================= */
/* sticky NAVBAR SCROLL BEHAVIOR */
/* ========================================= */

/* Select navbar */
const navbar = document.querySelector(".hero-top");

/* Stores last scroll position */
let lastScrollY = window.scrollY;

/* Minimum scroll distance before navbar reacts */
const scrollThreshold = 10;

/* Listen for scrolling */
window.addEventListener("scroll", () => {

  /* Current scroll position */
  const currentScrollY = window.scrollY;

  /* Difference between current + previous scroll */
  const scrollDifference = currentScrollY - lastScrollY;

  /* ========================================= */
  /* DARKER NAVBAR AFTER SCROLLING */
  /* ========================================= */

  if (currentScrollY > 40) {

    navbar.classList.add("scrolled");

  } 
  
  else {

    navbar.classList.remove("scrolled");

  }

  /* ========================================= */
  /* IGNORE TINY SCROLL MOVEMENTS */
  /* ========================================= */

  if (Math.abs(scrollDifference) < scrollThreshold) {

    return;

  }

  /* ========================================= */
  /* HIDE NAVBAR WHEN SCROLLING DOWN */
  /* ========================================= */

  if (scrollDifference > 0 && currentScrollY > 120) {

    /* User scrolling down */
    navbar.classList.add("nav-hidden");

  } 
  
  else {

    /* User scrolling up */
    navbar.classList.remove("nav-hidden");

  }

  /* Save current position for next comparison */
  lastScrollY = currentScrollY;

});


// =========================================
// SERVICE COUNTDOWN
// Sunday 5/31 at 9:00 AM MST
// =========================================

const countdownTimer = document.getElementById("countdown-timer");

// target date in MST / Phoenix time
const serviceDate = new Date("2026-05-31T09:00:00-07:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = serviceDate - now;

  if (distance <= 0) {
    countdownTimer.textContent = "00:00:00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdownTimer.textContent =
    `${days}d ${hours.toString().padStart(2, "0")}:` +
    `${minutes.toString().padStart(2, "0")}:` +
    `${seconds.toString().padStart(2, "0")}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// close mobile menu after clicking a section
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});


// =========================================
// BUTTON HOVER ANIMATION
// =========================================

// Select all buttons
const buttons = document.querySelectorAll("button");

// Loop through buttons
buttons.forEach(button => {

  // Hover animation
  button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-4px)";

  });

  // Reset animation
  button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0px)";

  });

});