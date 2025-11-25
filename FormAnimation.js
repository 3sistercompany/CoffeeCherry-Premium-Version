document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add 'show' class
        entry.target.classList.add('show');

        // If it's the contact form, stagger child animations
        if (entry.target.classList.contains('contact-form')) {
          const children = Array.from(entry.target.querySelectorAll('.form-row, .form-group, textarea, button'));
          children.forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.1}s`;
            child.classList.add('show');
          });
        }
      } else {
        // Remove 'show' class if you want repeat animations
        entry.target.classList.remove('show');
        if (entry.target.classList.contains('contact-form')) {
          const children = entry.target.querySelectorAll('.form-row, .form-group, textarea, button');
          children.forEach(child => child.classList.remove('show'));
        }
      }
    });
  }, { threshold: 0.2 });

  // Observe all hidden elements
  document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
});
