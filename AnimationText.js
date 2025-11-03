document.addEventListener("DOMContentLoaded", () => {
  const screenWidth = window.innerWidth;

  // Set threshold based on screen width
  let threshold;
  if (screenWidth <= 375) {
    threshold = 0.05; // very small phones
  } else if (screenWidth <= 414) {
    threshold = 0.08; // small phones
  } else if (screenWidth <= 480) {
    threshold = 0.1; // mobile
  } else if (screenWidth <= 820) {
    threshold = 0.15; // medium phones / small tablets
  } else if (screenWidth <= 1024) {
    threshold = 0.2; // tablets / laptops
  } else {
    threshold = 0.25; // larger laptops / desktop
  }

  // List of elements to observe
  const selectors = [
    ".hidden",
    ".stat",
    ".scroll-inOur",
    ".scroll-in",
    ".scroll-left",
    ".scroll-right",
    ".contact-form"
  ];

  selectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          entry.target.classList.add("visible"); // for scroll animations
        } else {
          entry.target.classList.remove("show");
          entry.target.classList.remove("visible");
        }
      });
    }, { threshold });

    elements.forEach(el => observer.observe(el));
  });
});
