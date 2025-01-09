let currentSlide = 1;
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === slideIndex - 1) {
      slide.classList.add('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  if (currentSlide > 1) {
    currentSlide--;
  }
  showSlide(currentSlide);
});

nextButton.addEventListener('click', () => {
  if (currentSlide < slides.length) {
    currentSlide++;
  }
  showSlide(currentSlide);
});

showSlide(currentSlide);
