// Load navbar
// include-sections.js

// Load navbar
fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    const navbar = document.getElementById('navbar-include');
    if (navbar) {
      navbar.innerHTML = data;
    } else {
      console.warn('Navbar placeholder not found');
    }
  });

// Load footer
fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    const footer = document.getElementById('footer-include');
    if (footer) {
      footer.innerHTML = data;
    }
  });