//Nav
const hamburgerButton = document.querySelector(".hamburgerMenu");
const navLinks = document.querySelector(".navLinks");
const links = navLinks.querySelectorAll("a");
const icon = hamburgerButton.querySelector("i"); 

// Function to toggle the menu display and prevent body scroll
function toggleMenu() {
  if (!navLinks.classList.contains('active')) {
    // Show the side nav
    navLinks.classList.add("active");
    // Change the icon to 'fa-xmark'
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");

    // Prevent body from scrolling
    document.body.style.overflow = "hidden";
  } else {
    // Hide the side nav
    navLinks.classList.remove("active");
    // Change the icon back to 'fa-bars'
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

    // Allow body scrolling again
    document.body.style.overflow = "auto";
  }
}

// Function to close the menu and reset the icon, allowing scroll
function closeMenu() {
  navLinks.classList.remove("active");
  icon.classList.remove("fa-xmark");
  icon.classList.add("fa-bars");

  // Allow body scrolling again
  document.body.style.overflow = "auto";
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

// Call the function to ensure correct behavior on page load
handleMobileMenu();

// Listen for window resize to adjust menu behavior
window.addEventListener('resize', handleMobileMenu);
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
