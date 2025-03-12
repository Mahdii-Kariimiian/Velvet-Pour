document.addEventListener('DOMContentLoaded', function () {
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  const carouselContainer = document.querySelector('.carousel-container');
  const totalItems = document.querySelectorAll('.carousel-item').length;
  let currentIndex = 0;

  function updateCarouselPosition() {
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    const offset = -currentIndex * itemWidth;
    carouselContainer.style.transform = `translateX(${offset}px)`;
  }

  prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarouselPosition();
  });

  nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarouselPosition();
  });

  updateCarouselPosition(); // Initialize the carousel position
});
