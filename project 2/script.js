let currentIndex = 0; // Start from the first slide
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to show the slide at a specific index
function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const slider = document.querySelector('.slider-images');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Function to go to the next slide
function nextSlide() {
  showSlide(currentIndex + 1);
}

// Function to go to the previous slide
function prevSlide() {
  showSlide(currentIndex - 1);
}

// Function to go to a specific slide from the thumbnail navigation
function goToSlide(index) {
  showSlide(index);
}

// Add event listeners to the buttons
document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);

// Automatically show the next slide every 5 seconds
setInterval(nextSlide, 5000);
