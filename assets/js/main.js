var slideIndex = 1;
showImages(slideIndex);

// Next-Previous controls
function slideImage(n) {
    showImages(slideIndex += n);
}

function showImages(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}