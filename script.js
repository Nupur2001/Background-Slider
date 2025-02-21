let body = document.body;
let sliderContainer = document.querySelector(".sliderContainer");
let slide = document.querySelectorAll(".slide");
let leftBtn = document.querySelector(".leftBtn");
let rightBtn = document.querySelector(".rightBtn");

let slideNumber = 0;

function rightClick() {
  if (slideNumber <= slide.length) {
    slideNumber = (slideNumber + 1) % slide.length;
  }
  body.style.backgroundImage = slide[slideNumber].style.backgroundImage;

  console.log(slideNumber);
}

function leftClick() {
  let arr = [1, 2, 3, 4, 5];
  slideNumber = (slideNumber - 1 + arr.length) % arr.length;
  body.style.backgroundImage = slide[slideNumber].style.backgroundImage;
  console.log(slideNumber);
}

rightBtn.addEventListener("click", () => {
  rightClick();
  // console.log(rightClick())
});
leftBtn.addEventListener("click", () => {
  leftClick();
});
