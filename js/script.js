// alert("is working!");

// const anim = lottie

// anim.loadAnimation({
//   container: document.querySelector('#lottie-test'),
//   renderer: 'canvas',
//   loop: true,
//   autoplay: true,
//   path: './lottie-animation/designer.json'
// });

//
const reviewsContainer = document.querySelector(".page-reviews__container");
const hiddenElements = reviewsContainer.querySelectorAll(".hidden");
const reviewsButton = reviewsContainer.querySelector(".more");
reviewsButton.addEventListener("click", () => {
  hiddenElements.forEach((element) => element.classList.remove("hidden"));
  reviewsButton.classList.add("none");
});
//

//
const answerButton = document.querySelectorAll(".answers__item-button");
const answers = document.querySelectorAll(".answers__item");
const answersText = document.querySelectorAll(".answers__item-text");

answers.forEach((answer) =>
  answer.addEventListener("click", toggleClickHandler)
);

function toggleClickHandler(e) {
  e.stopPropagation();

  let elIsValid = [...e.target.classList].some((className) =>
    ["answers__item-title", "answers__item-button"].includes(className)
  );
  if (elIsValid) {
    const thisButton = this.querySelector(".answers__item-button");
    const thisText = this.querySelector(".answers__item-text");

    thisButton.classList.toggle("active");
    thisText.classList.toggle("active");
    this.classList.toggle("active");
    if (thisText.classList.contains("active")) {
      thisText.style.height = `${thisText.scrollHeight}px`;
    } else {
      thisText.style.height = 0;
    }
  }
}
//
// обрабатываем  клик
// function toggleClickHandler(e) {
//   if (elBlock.style.height === "0px") {
//     elBlock.style.height = `${elBlock.scrollHeight}px`;
//   } else {
//     elBlock.style.height = `${elBlock.scrollHeight}px`;
//     window.getComputedStyle(elBlock, null).getPropertyValue("height");
//     elBlock.style.height = "0";
//   }
// }
// elToggle.addEventListener("click", toggleClickHandler);
