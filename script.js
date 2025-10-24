// Navbar and Hamburger references
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Change navbar style when scrolling
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle menu on mobile
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
});
