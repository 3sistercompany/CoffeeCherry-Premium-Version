// Menu toggle
const menuOpen = document.querySelector('.MenuOpen');
const closeTag = document.querySelector('.CloseTag');
const navLinks = document.querySelector('.nav-links');

menuOpen.addEventListener('click', () => {
    if (window.innerWidth <= 1024) { // changed from 820 to 1024
        navLinks.classList.add('active');
        menuOpen.style.display = 'none';
        closeTag.style.display = 'block';
    }
});

closeTag.addEventListener('click', () => {
    if (window.innerWidth <= 1024) { // changed from 820 to 1024
        navLinks.classList.remove('active');
        menuOpen.style.display = 'block';
        closeTag.style.display = 'none';
    }
});

// Reset menu when resizing window
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) { // changed from 820 to 1024
        navLinks.classList.remove('active');
        menuOpen.style.display = 'none';
        closeTag.style.display = 'none';
    } else {
        menuOpen.style.display = 'block';
    }
});
menuOpen.addEventListener('click', () => {
    if (window.innerWidth <= 1440) { // now works on laptops
        navLinks.classList.add('active');
        menuOpen.style.display = 'none';
        closeTag.style.display = 'block';
    }
});

// Close menu
closeTag.addEventListener('click', () => {
    if (window.innerWidth <= 1440) { // now works on laptops
        navLinks.classList.remove('active');
        menuOpen.style.display = 'block';
        closeTag.style.display = 'none';
    }
});
const slides = document.querySelectorAll('.slidingg');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dots = document.querySelectorAll('.dotingVideo');

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);

    // handle video
    const video = slide.querySelector('video');
    if (video) {
      if (i === index) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0;
      }
    }
  });
  current = index;
}

// Next & prev
nextBtn.addEventListener('click', () => showSlide((current + 1) % slides.length));
prevBtn.addEventListener('click', () => showSlide((current - 1 + slides.length) % slides.length));

// Dots
dots.forEach(dot => {
  dot.addEventListener('click', () => showSlide(parseInt(dot.dataset.index)));
});

// Autoplay
setInterval(() => showSlide((current + 1) % slides.length), 8000);

// Init
showSlide(current);

// Contact form submission
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default submit

    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert("Thank you! Your message has been sent.");
            form.reset();
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    })
    .catch(error => {
        alert("Oops! There was a problem submitting your form.");
    });
});

// Navbar hide/show on scroll
let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // scrolling down → hide navbar
        navbar.style.top = "80px";
    } else {
        // scrolling up → show navbar
        navbar.style.top = "0";
    }
    lastScrollY = window.scrollY;
});


(() => {
  const slider   = document.getElementById('slider');
  const slidesEl = document.getElementById('slides');
  const prevBtn  = document.getElementById('prevBtn');
  const nextBtn  = document.getElementById('nextBtn');
  const dotsEl   = document.getElementById('dots');

  const slideCount = slidesEl.children.length;
  let index = 0;
  let autoplayId = null;
  const AUTOPLAY_MS = 3500;

  // Build dots
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.dataset.index = i;
    dotsEl.appendChild(dot);
    dot.addEventListener('click', () => goTo(i));
  }
  const dots = Array.from(dotsEl.children);

  function updateUI() {
    slidesEl.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
  }

  function goTo(i) {
    index = (i + slideCount) % slideCount;
    updateUI();
  }

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // Autoplay
  function startAutoplay() {
    stopAutoplay();
    autoplayId = setInterval(next, AUTOPLAY_MS);
  }
  function stopAutoplay() {
    if (autoplayId) clearInterval(autoplayId);
  }

  slider.addEventListener('mouseenter', stopAutoplay);
  slider.addEventListener('mouseleave', startAutoplay);

  // Touch swipe
  let startX = 0;
  slider.addEventListener('touchstart', e => startX = e.touches[0].clientX, { passive: true });
  slider.addEventListener('touchend', e => {
    let dx = e.changedTouches[0].clientX - startX;
    if (dx > 50) prev();
    if (dx < -50) next();
  });

  // Init
  updateUI();
  startAutoplay();
})();





   
      (() => {
      const slider = document.getElementById('slider');
      const slidesEl = document.getElementById('slides');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const dotsEl  = document.getElementById('dots');

      const slideCount = slidesEl.children.length;
      let index = 0;
      let autoplayId = null;
      const AUTOPLAY_MS = 3500;

      // Build dots
      for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('button');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goTo(i));
        dotsEl.appendChild(dot);
      }

      const dots = Array.from(dotsEl.children);

      function updateUI() {
        slidesEl.style.transform = `translateX(${-index * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        slider.setAttribute('aria-live', 'polite');
      }

      function goTo(i) {
        index = (i + slideCount) % slideCount;
        updateUI();
      }

      const next = () => goTo(index + 1);
      const prev = () => goTo(index - 1);

      // Buttons
      nextBtn.addEventListener('click', next);
      prevBtn.addEventListener('click', prev);

      // Keyboard (left/right)
      slider.tabIndex = 0;
      slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft')  prev();
      });

      // Autoplay (pause on hover/focus)
      function startAutoplay() {
        stopAutoplay();
        autoplayId = setInterval(next, AUTOPLAY_MS);
      }
      function stopAutoplay() {
        if (autoplayId) clearInterval(autoplayId);
        autoplayId = null;
      }
      slider.addEventListener('mouseenter', stopAutoplay);
      slider.addEventListener('mouseleave', startAutoplay);
      slider.addEventListener('focusin', stopAutoplay);
      slider.addEventListener('focusout', startAutoplay);

      // Touch swipe
      let startX = 0, currentX = 0, dragging = false;
      const threshold = 40; // pixels

      slider.addEventListener('touchstart', (e) => {
        dragging = true;
        startX = e.touches[0].clientX;
        currentX = startX;
        stopAutoplay();
      }, { passive: true });

      slider.addEventListener('touchmove', (e) => {
        if (!dragging) return;
        currentX = e.touches[0].clientX;
        const dx = currentX - startX;
        slidesEl.style.transition = 'none';
        slidesEl.style.transform = `translateX(calc(${-index * 100}% + ${dx}px))`;
      }, { passive: true });

      function endTouch() {
        if (!dragging) return;
        dragging = false;
        const dx = currentX - startX;
        slidesEl.style.transition = '';
        if (dx > threshold) prev();
        else if (dx < -threshold) next();
        else updateUI();
        startAutoplay();
      }
      slider.addEventListener('touchend', endTouch);
      slider.addEventListener('touchcancel', endTouch);

      // Init
      updateUI();
      startAutoplay();

      // Optional: expose simple API for debugging in console
      window.gallery = { next, prev, goTo };
    })();

  // Observe cards
// Select all cards








