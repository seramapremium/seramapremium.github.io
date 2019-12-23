// Form
const btnSend = document.querySelector('.send');
btnSend.addEventListener('click', function () {
    alert("Maaf untuk saat ini form ajukan pertanyaan tidak berfungsi.")
});

// NavBar
const navside = document.querySelectorAll('.sidenav');
M.Sidenav.init(navside);

// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 400,
    duration: 600,
    interval: 3000
});

// Parallax
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

// Carousel
const carousel = document.querySelectorAll('.carousel');
let autoCarousel = M.Carousel.init(carousel);
// autoCarousel.next(2);

const mBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mBox);