
var images = [
    "assets/images/blossom.jpg",
    "assets/images/daffodil.jpg",
    "assets/images/pansy.jpg",
    "assets/images/rose.jpg",
    "assets/images/sunflower.jpg",
    "assets/images/tulip.jpg",
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

    /* Creates a div for the shuffled cards. */
    for (var i = 0; i < cardDeck.length; i++) {
        var cards = document.createElement("div");
        cards.className = "cards";
        cards.innerHTML = `<div class="face-down"><i class="fa-brands fa-pagelines"></i></div><div class="face-up"><img src="${cardDeck[i]}" alt=""></div>`

        cards.onclick = turnCard;
        cards.dataset.image = cardDeck[i];
        gameArea.appendChild(cards);
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
    document.getElementById("moves").textContent = moves;
    document.getElementById("matches").textContent = matches + "  / 6";

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

            if (matches == 6) {
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
    document.getElementById("finalMoves").textContent = "Moves:  " + moves;
    document.getElementById("win").classList.add("show");

}

function newGame() {
    document.getElementById("win").classList.remove("show");
    beginGame();
}

beginGame();




