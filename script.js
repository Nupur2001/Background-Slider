let body = document.body;
let sliderContainer = document.querySelector(".sliderContainer");
let slide = document.querySelectorAll(".slide");
let leftBtn = document.querySelector(".leftBtn");
let rightBtn = document.querySelector(".rightBtn");

let slideNumber = 0;
// console.log(slide);
// console.log(slide.length);
// console.log(slideNumber)



function rightClick(){
    if (slideNumber <= slide.length) {
        slideNumber=(slideNumber+1)%slide.length
    }
    body.style.backgroundImage=slide[slideNumber].style.backgroundImage
    return slideNumber
}


leftBtn.addEventListener("click", () => {
  // Slide will move in left direction(--)
  // slide.length-1
  // slideNumber--
  // body.style.backgroundImage
});

rightBtn.addEventListener("click", () => {

  rightClick()
// console.log(rightClick())

});



