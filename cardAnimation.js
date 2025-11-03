// card-animation.js

document.addEventListener("DOMContentLoaded", () => {
  // Select all cards
  const cards = document.querySelectorAll(".card");

  // Intersection Observer options
  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: 0.1 // trigger when 10% of the card is visible
  };

  // Callback for observer
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-card");
      } else {
        entry.target.classList.remove("animate-card");
      }
    });
  };

  // Create observer
  const observer = new IntersectionObserver(callback, options);

  // Observe each card
  cards.forEach(card => observer.observe(card));
});


// Animate header and filters
window.addEventListener('load', () => {
  const fadeElements = document.querySelectorAll('.animate-fade');
  fadeElements.forEach(el => {
    setTimeout(() => {
      el.classList.add('show');
    }, 400); // delay for smooth effect
  });

  // Animate cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate-card');
    }, 100 * index);
  });
});


window.addEventListener('load', () => {
  const topContainer = document.querySelector('.top-container');
  setTimeout(() => {
    topContainer.classList.add('show');
  }, 200); // slight delay for smoother entrance
});


// Wait until the DOM loads
document.addEventListener('DOMContentLoaded', () => {
  const footer = document.getElementById('footer');
  const footerElements = footer.querySelectorAll('.footer-container, .footer-copy');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add animation when visible
        footerElements.forEach(el => el.classList.add('footer-animate'));
      } else {
        // Remove animation when not visible
        footerElements.forEach(el => el.classList.remove('footer-animate'));
      }
    });
  }, { threshold: 0.3 });

  observer.observe(footer);
});


