
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const contactCard = document.getElementById('contact-card');
  const successMessage = document.getElementById('success-message');
  const submitButton = document.getElementById('submit-button');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Disable submit button and show loading state
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';
      
      // Get form data
      const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        companyName: document.getElementById('companyName').value,
        website: document.getElementById('website').value,
        message: document.getElementById('message').value
      };
      
      console.log('Form data submitted:', formData);
      
      // Simulate form submission with a timeout
      setTimeout(function() {
        // Show success message
        contactCard.style.display = 'none';
        successMessage.classList.add('active');
        
        // Reset form
        contactForm.reset();
        
        // Reset button state (though it will be hidden)
        submitButton.disabled = false;
        submitButton.textContent = 'Request Trial';
      }, 1500);
    });
  }
});
