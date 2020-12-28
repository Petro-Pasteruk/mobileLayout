let
    firstScreen = document.querySelector(".firstScreen"),
    secondScreen = document.querySelector(".secondScreen"),
    thirdScreen = document.querySelector(".thirdScreen"),
    firstScreenLoader = document.querySelector(".loader"),
    firstScreenPopup = document.querySelector(".firstScreen .popup"),
    firstScreenPopupShadow = document.querySelector(".firstScreen .shadow__popup"),
    secondScreenLoader = document.querySelector(".secondScreen-loader");

firstScreenLoader.classList.add("rotate");
setTimeout(() => {
    firstScreenLoader.style.display = "none";
    firstScreenPopup.classList.add("visible");
    firstScreenPopupShadow.classList.add("visible");
}, 2000);

function firstScreenBtnListener () {
    firstScreen.classList.add("hidden");
    secondScreen.classList.remove("hidden");
    setTimeout(() => {
        secondScreenLoader.classList.add("runLoader");
    }, 300);
    setTimeout(() => {
        secondScreen.classList.add("hidden");
        thirdScreen.classList.remove("hidden");
    }, 4000);
}

document.querySelector(".firstScreen .popup-btn__wrap > button:nth-child(1)").addEventListener("click", firstScreenBtnListener);
document.querySelector(".firstScreen .popup-btn__wrap > button:nth-child(2)").addEventListener("click", firstScreenBtnListener);