let slideIndex = 1;
showSlide(slideIndex);
function changeSlide(n) {
    showSlide(slideIndex += n);
}
function currentSlide(n) {
    showSlide(slideIndex = n);
}
function showSlide(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

   
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

   
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}


let slideInterval = setInterval(() => {
    changeSlide(1);
}, 4000); 


const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});
slideshowContainer.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
        changeSlide(1);
    }, 4000);
});
