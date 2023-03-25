$(document).ready(function(){

    let slideIndex = 0;
    let savedIndex = 0;
    const slideDuration = 7000;
    showSlides(slideIndex);

    let loopInterval = setInterval(loopingSlides, slideDuration);

    function loopingSlides(){
        let currIndex = getIndex();
        plusSlides(currIndex + 1);
    }

    function getIndex(){
        return slideIndex;
    }

    function plusSlides(n){
        clearInterval(loopInterval);
        showSlides(slideIndex += n);
        loopInterval = setInterval(loopingSlides, slideDuration);
    }

    function currSlide(n){
        showSlides(slideIndex = n);
    }

    function hideAll(slides){
        slides.forEach(elem => {
            elem.classList.remove("reveal");
        });
    }

    let nextBtn = document.getElementById("next-slide-btn");
    let prevBtn = document.getElementById("prev-slide-btn");

    nextBtn.addEventListener("click", () => plusSlides(1));
    prevBtn.addEventListener("click", () => plusSlides(-1));

    function showSlides(index){
        let slides = document.querySelectorAll(".carousel-slide");

        if(index > slides.length - 1){
            slideIndex = 0;
        }
        if (index < 0) {
            slideIndex = slides.length - 1;
        }

        hideAll(slides);

        let showSlide = slides[slideIndex];
        savedIndex = slideIndex;
        showSlide.classList.add("reveal");
    }
});