let body = document.body;
let sliderContainer = document.querySelector(".sliderContainer");
let slide = document.querySelectorAll(".slide");
let leftBtn = document.querySelector(".leftBtn");
let rightBtn = document.querySelector(".rightBtn");

let slideNumber = 0;

function slideActive() {
  slide.forEach((s) => {
    s.classList.remove("active");
    slide[slideNumber].classList.add("active")
  });
}

function rightClick() {
  if (slideNumber <= slide.length) {
    slideNumber = (slideNumber + 1) % slide.length;
  }
  body.style.backgroundImage = slide[slideNumber].style.backgroundImage;
  slideActive();
  console.log(slideNumber);
}

function leftClick() {
  slideNumber = (slideNumber - 1 + slide.length) % slide.length;
  body.style.backgroundImage = slide[slideNumber].style.backgroundImage;
  slideActive();
  console.log(slideNumber);
}

rightBtn.addEventListener("click", () => {
  rightClick();
  // console.log(rightClick())
});
leftBtn.addEventListener("click", () => {
  leftClick();
  // console.log(leftClick())
});
