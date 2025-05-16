
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenuCloseButton = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMobileMenu() {
    mobileMenu.classList.toggle('is-active');
    document.body.classList.toggle('no-scroll');
  }

  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', toggleMobileMenu);
  }
  
  if (mobileMenuCloseButton) {
    mobileMenuCloseButton.addEventListener('click', toggleMobileMenu);
  }

  // Close mobile menu when clicking outside
  mobileMenu?.addEventListener('click', function(e) {
    if (e.target === mobileMenu) {
      toggleMobileMenu();
    }
  });

  // Handle mobile navigation links
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function() {
      const sectionId = this.getAttribute('data-scroll-to');
      const section = document.getElementById(sectionId);
      
      if (section) {
        toggleMobileMenu();
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Add a small delay for the menu to close
      }
    });
  });

  // Smooth scrolling for desktop navigation
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-scroll-to');
      const section = document.getElementById(sectionId);
      
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Check if URL has a hash and scroll to that section
  if (window.location.hash) {
    const sectionId = window.location.hash.substring(1);
    const section = document.getElementById(sectionId);
    
    if (section) {
      setTimeout(() => {
        section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }
});
