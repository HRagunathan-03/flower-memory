//Applies event listener to each game card.

let buttonOne = document.getElementById("button-one");
buttonOne.addEventListener("click", displayCardImage);

function displayCardImage(e) {
    e.currentTarget.classList.toggle("btn--tulip");
}