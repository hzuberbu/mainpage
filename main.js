window.addEventListener("scroll", function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

/*
function ImgSlider(anything) {
    document.querySelector('.pepsi').src = anything;
}

function ChangeBgColor(color){
    const sec = document.querySelector('.nav');
    sec.style.background = color; 
}
*/