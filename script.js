const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('active');
  menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});
