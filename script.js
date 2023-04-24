const slides = document.querySelectorAll('.slide');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');

// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
currentSlide = 0;
let maxLen = slides.length;

const goToSlide = function (slide) {
    slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
}

const nextSlide = function () {
    if (currentSlide === maxLen - 1) {
        currentSlide = 0;

    }
    else {
        currentSlide++;
    }
    goToSlide(currentSlide);
}

const prevSlide = function () {
    if (currentSlide === 0) {
        currentSlide = maxLen - 1;

    }
    else {
        currentSlide--;
    }
    goToSlide(currentSlide);
}


goToSlide(0)
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        nextSlide();
    }
    else if (e.key === 'ArrowLeft') {
        prevSlide();
    }

})

const slids = document.querySelectorAll('.slid');
const btnRigh = document.querySelector('.slidar__btn--right');
slids.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
let curSlide = 0;
const maxSlide = slids.length;
btnRigh.addEventListener('click', function () {
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    }
    else {
        curSlide++
    }
    slids.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`));
})
