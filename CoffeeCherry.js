const sliders = document.querySelectorAll('.bannerSlider');

sliders.forEach(slider => {
  const images = slider.querySelectorAll('img');
  let current = 0;

  images[current].classList.add('active');

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 3000); // تغيير الصورة كل 3 ثواني
});
