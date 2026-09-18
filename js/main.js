document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Theme Switcher
  const themeToggle = document.querySelector('.theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'dark';

  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    if (themeToggle) themeToggle.textContent = '🌙 Dark Mode';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.textContent = '☀️ Light Mode';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = '☀️ Light Mode';
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = '🌙 Dark Mode';
      }
    });
  }

  // Highlight Current Navigation Link
  const currentLocation = window.location.pathname;
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.getAttribute('href') !== '#' && currentLocation.includes(link.getAttribute('href'))) {
      link.classList.add('active');
    }
  });
});
