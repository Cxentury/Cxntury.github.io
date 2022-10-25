let slides = document.getElementsByClassName("imageDisplay");

for (let index = 0; index < slides.length; index++) {
    slides[index].querySelectorAll(".arrowHitbox").forEach(el=>addListener(el,index));
    updateSlide(slides[index]);
}


function addListener(element,index){

    element.addEventListener("click", function (e) {
        let images=slides[index].querySelectorAll("img");
        let active = slides[index].querySelector("img.active");
        active.classList.remove("active");
        let nextImage = e.target.classList.contains("ahbRight") ? active.nextElementSibling : active.previousElementSibling;
        if(nextImage.tagName != "IMG" && e.target.classList.contains("ahbLeft")){
            images[images.length-1].classList.add("active");
        }
        else if (nextImage.tagName != "IMG") {
            images[0].classList.add("active");
        }
        else nextImage.classList.add("active")
        updateSlide(slides[index]);
    })
    
}
function updateSlide(slide) {
    slide.querySelectorAll("img:not(.active)").forEach(el => el.style.display = "none");
    slide.querySelector("img.active").style.display = "block";
}