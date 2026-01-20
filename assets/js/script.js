

//Applies event listener to each game card.

let buttonOne = document.getElementById("button-one");
buttonOne.addEventListener("click", displayTulipCard);

let buttonTwo = document.getElementById("button-two");
buttonTwo.addEventListener("click", displaySunflowerCard);

let buttonThree = document.getElementById("button-three");
buttonThree.addEventListener("click", displaySunflowerCard);

let buttonFour = document.getElementById("button-four");
buttonFour.addEventListener("click", displayLotusCard);

let buttonFive = document.getElementById("button-five");
buttonFive.addEventListener("click", displayLotusCard);

let buttonSix = document.getElementById("button-six");
buttonSix.addEventListener("click", displayTulipCard);

/**
 * Displays the image for the game card.
 */

function displayTulipCard(e) {
    e.currentTarget.classList.toggle("btn--tulip");
}

function displaySunflowerCard(e) {
    e.currentTarget.classList.toggle("btn--sunflower");
}

function displayLotusCard(e) {
    e.currentTarget.classList.toggle("btn--lotus");
}




