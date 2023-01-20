const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlide = 0;
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('#banner img');
const bannerTagLine = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');

// Create the dots elements 
for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dot.setAttribute('data-index', i);
  if(i == currentSlide)
    dot.style.backgroundColor = "white";
  dotsContainer.appendChild(dot);
}

arrowLeft.addEventListener('click', function() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateBanner();
  updateDots();
});

arrowRight.addEventListener('click', function() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  updateBanner();
  updateDots();
});

dotsContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('dot')) {
    currentSlide = event.target.getAttribute('data-index');
    updateBanner();
    updateDots();
  }
});

function updateBanner() {
  bannerImg.src = './assets/images/slideshow/' + slides[currentSlide].image;
  bannerTagLine.innerHTML = slides[currentSlide].tagLine;
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(function(dot) {
    if (dot.getAttribute('data-index') == currentSlide) {
      dot.style.backgroundColor = "white";
    } else {
      dot.style.backgroundColor = "";
    }
  });
}
