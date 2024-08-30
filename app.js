//Nav
const hamburgerButton = document.querySelector(".hamburgerMenu");
const navLinks = document.querySelector(".navLinks");
const links = navLinks.querySelectorAll("a"); 

// Function to toggle the menu display
function toggleMenu() {
  if (navLinks.style.display === "none" || navLinks.style.display === "") {
    navLinks.style.display = "flex";
  } else {
    navLinks.style.display = "none";
  }
}

// Function to close the menu
function closeMenu() {
  navLinks.style.display = "none";
}

// Add event listener to the hamburger button
hamburgerButton.addEventListener('click', toggleMenu);

// Media query to detect mobile devices

function handleMobileMenu() {
  if (window.innerWidth <= 768) {
    links.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  } else {
    // Remove the event listener for larger screens
    links.forEach(link => {
      link.removeEventListener('click', closeMenu);
    });
  }
}

//Change Color for Nav on scroll
handleMobileMenu();
window.addEventListener('resize', handleMobileMenu);
window.addEventListener('scroll', function() {
   const navbar = document.querySelector('nav');
   if (window.scrollY > 50) { 
       navbar.classList.add('scrolled');
   } else {
       navbar.classList.remove('scrolled');
   }
});
