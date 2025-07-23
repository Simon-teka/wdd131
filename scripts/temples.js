// Hamburger menu toggle
const menuButton = document.getElementById('menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.textContent = nav.classList.contains('open') ? '✖' : '☰';
});

// Footer dynamic year and last modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modification: ${document.lastModified}`;