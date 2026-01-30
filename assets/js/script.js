
var images = [
    "https://unsplash.com/photos/a-large-yellow-sunflower-on-a-yellow-background-Zrb2omy9a18",
    "https://unsplash.com/photos/shallow-focus-photography-of-white-and-pink-petaled-flowers-fY1ECB1RCd0",
    "https://unsplash.com/photos/pink-lotus-flower-in-bloom-B1cJcYPoFxY",
    "https://unsplash.com/photos/blue-flowers-coIBOiWBPjk",
    "https://unsplash.com/photos/pink-roses-in-close-up-photography-ktzSt2uT1po",
    "https://unsplash.com/photos/yellow-daffodils-in-bloom-during-daytime--bmC0bWpqHk",
];

var cardOne = null;
var cardTwo = null;
var canTurn = true;
var matches = 0;
var moves = 0;

function beginGame() {
    gameArea = document.getElementById("gameArea");
    gameArea.innerHTML = "";

    var cardDeck = images.concat(images);

    /* Shuffles the cards. */
    cardDeck.sort(function() {
        return Math.random() - 0.5;
    });

    for (var i = 0; i < cardDeck.length; i++) {
        var playingCard = document.createElement("div");
        playingCard.className = "playingCard";
        playingCard.innerHTML = `
        <div class="face-down"><i class="fa-brands fa-pagelines"></i></div>
            <div class="face-up"><img src="${cardDeck[i]}" alt=""></div>
        `
        playingCard.onclick = turnCard;
        playingCard.dataset.image = cardDeck[i];
        gameArea.appendChild(playingCard);
    }

    /* Resets the variables. */
    cardOne = null;
    cardTwo = null;
    canTurn = true;
    matches = 0;
    moves = 0;

    scoreCard();

}


function turnCard() {
    if (!canTurn) return;
    if (this.classList.contains("flipped")) return;
    if (this.classList.contains("matched")) return;

    this.classList.add("flipped");

    if (cardOne == null) {
        cardOne = this;
    } else {
        cardTwo = this;
        canTurn = false;
        moves++;
        scoreCard();
        matched();
    }


}


function scoreCard() {

}


function matched() {
    var pair = cardOne.dataset.image == cardTwo.dataset.image;

    if (pair) {
        setTimeout(() => {
            cardOne.classList.add("matched");
            cardTwo.classList.add("matched");
            matches++;
            scoreCard();
            reset();

            if (matches == 8) {
                endGame();
            }
        }, 500);
    } else {
        setTimeout(() => {
            cardOne.classList.remove("flipped");
            cardTwo.classList.remove("flipped");
            reset();

        }, 1000)
    }
}

function reset() {
    cardOne = null;
    cardTwo = null;
    canTurn = true;
}

function endGame() {
    

}






