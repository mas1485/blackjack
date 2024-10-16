
/**
 * Wait for dom to load before starting game 
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            }
        });
    }
    runGame("blackjack");
})

/**
 * Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu or bar icon
 */
function burgerNav() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/**
 * Burger icon for player to see balance and use chips to bet
 */
function burgerChip() {
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

/**
 * runs blackjack game with two cards dealt to player and two cards dealt to dealer
 */
function runGame(gameType) {

    var newDeck = [...deck] ;

    var card1 = getCardFromDeck(newDeck) ;
    newDeck = removeCardFromDeck(newDeck , card1) ;

    var card2 = getCardFromDeck(newDeck) ;
    newDeck = removeCardFromDeck(newDeck , card2) ;
    playerHand.push (card1, card2);
    getHandValue(playerHand);

    var card3 = getCardFromDeck(newDeck) ;
    newDeck = removeCardFromDeck(newDeck , card3) ;

    var card4 = getCardFromDeck(newDeck) ;
    newDeck = removeCardFromDeck(newDeck , card4) ;
    dealerHand.push (card3, card4);
    getHandValue(dealerHand);

    if (gameType === "blackjack") {
        dealCards(card1, card2, card3, card4);
    } else {
        alert (`Unknown game type: ${gameType}`);
        alert (`Unknown game type: ${gameType}`);
    }
}

/**
 * Gets card from deck
 */
function getCardFromDeck(deck) {
    var newCard = deck[Math.floor(Math.random() * deck.length)];
    return newCard;
}

/**
 * Removes from deck
 */
function removeCardFromDeck(deck , cardToRemove) {
    deck = deck.filter((card) => card.id !== cardToRemove.id);
    return deck;
}

/**
 * Sums the players hand
 */
function getHandValue(hand) {
    var sum = 0;
    for (let i = 0 ; i < hand.length ; i++) {
        sum = sum + hand[i].value;
    }
    console.log(sum);
}

/**
 * Deals cards and inputs into html
 */
function dealCards(card1, card2, card3, card4) {
    document.getElementById('operand1').innerHTML = card1.name + " of " + card1.suit;
    document.getElementById('operand2').innerHTML = card2.name + " of " + card2.suit;
    document.getElementById('operand3').innerHTML = card3.name + " of " + card3.suit;
    document.getElementById('operand4').innerHTML = card4.name + " of " + card4.suit;
}

const playerHand = [];

const dealerHand = [];

const deck = [
    {
        suit: "hearts",
        name: "ace",
        value: 11,
        id: "1"
    },

    {
        suit: "hearts",
        name: "two",
        value: 2,
        id: "2"
    },

    {
        suit: "hearts",
        name: "three",
        value: 3,
        id: "3"
    },

    {
        suit: "hearts",
        name: "four",
        value: 4,
        id: "4"
    },

    {
        suit: "hearts",
        name: "five",
        value: 5,
        id: "5"
    },

    {
        suit: "hearts",
        name: "six",
        value: 6,
        id: "6"
    },

    {
        suit: "hearts",
        name: "seven",
        value: 7,
        id: "7"
    },

    {
        suit: "hearts",
        name: "eight",
        value: 8,
        id: "8"
    },

    {
        suit: "hearts",
        name: "nine",
        value: 9,
        id: "9"
    },

    {
        suit: "hearts",
        name: "ten",
        value: 10,
        id: "10"
    },

    {
        suit: "hearts",
        name: "jack",
        value: 10,
        id: "11"
    },

    {
        suit: "hearts",
        name: "queen",
        value: 10,
        id: "12"
    },

    {
        suit: "hearts",
        name: "king",
        value: 10,
        id: "13"
    },

    {
        suit: "diamonds",
        name: "ace",
        value: 11,
        id: "14"
    },

    {
        suit: "diamonds",
        name: "two",
        value: 2,
        id: "15"
    },

    {
        suit: "diamonds",
        name: "three",
        value: 3,
        id: "16"
    },

    {
        suit: "diamonds",
        name: "four",
        value: 4,
        id: "17"
    },

    {
        suit: "diamonds",
        name: "five",
        value: 5,
        id: "18"
    },

    {
        suit: "diamonds",
        name: "six",
        value: 6,
        id: "19"
    },

    {
        suit: "diamonds",
        name: "seven",
        value: 7,
        id: "20"
    },

    {
        suit: "diamonds",
        name: "eight",
        value: 8,
        id: "21"
    },

    {
        suit: "diamonds",
        name: "nine",
        value: 9,
        id: "22"
    },

    {
        suit: "diamonds",
        name: "ten",
        value: 10,
        id: "23"
    },

    {
        suit: "diamonds",
        name: "jack",
        value: 10,
        id: "24"
    },

    {
        suit: "diamonds",
        name: "queen",
        value: 10,
        id: "25"
    },

    {
        suit: "diamonds",
        name: "king",
        value: 10,
        id: "26"
    },

    {
        suit: "spades",
        name: "ace",
        value: 11,
        id: "27"
    },

    {
        suit: "spades",
        name: "two",
        value: 2,
        id: "28"
    },

    {
        suit: "spades",
        name: "three",
        value: 3,
        id: "29"
    },

    {
        suit: "spades",
        name: "four",
        value: 4,
        id: "30"
    },

    {
        suit: "spades",
        name: "five",
        value: 5,
        id: "31"
    },

    {
        suit: "spades",
        name: "six",
        value: 6,
        id: "32"
    },

    {
        suit: "spades",
        name: "seven",
        value: 7,
        id: "33"
    },

    {
        suit: "spades",
        name: "eight",
        value: 8,
        id: "34"
    },

    {
        suit: "spades",
        name: "nine",
        value: 9,
        id: "35"
    },

    {
        suit: "spades",
        name: "ten",
        value: 10,
        id: "36"
    },

    {
        suit: "spades",
        name: "jack",
        value: 10,
        id: "37"
    },

    {
        suit: "spades",
        name: "queen",
        value: 10,
        id: "38"
    },

    {
        suit: "spades",
        name: "king",
        value: 10,
        id: "39"
    },

    {
        suit: "clubs",
        name: "ace",
        value: 11,
        id: "40"
    },

    {
        suit: "clubs",
        name: "two",
        value: 2,
        id: "41"
    },

    {
        suit: "clubs",
        name: "three",
        value: 3,
        id: "42"
    },

    {
        suit: "clubs",
        name: "four",
        value: 4,
        id: "43"
    },

    {
        suit: "clubs",
        name: "five",
        value: 5,
        id: "44"
    },

    {
        suit: "clubs",
        name: "six",
        value: 6,
        id: "45"
    },

    {
        suit: "clubs",
        name: "seven",
        value: 7,
        id: "46"
    },

    {
        suit: "clubs",
        name: "eight",
        value: 8,
        id: "47"
    },

    {
        suit: "clubs",
        name: "nine",
        value: 9,
        id: "48"
    },

    {
        suit: "clubs",
        name: "ten",
        value: 10,
        id: "49"
    },

    {
        suit: "clubs",
        name: "jack",
        value: 10,
        id: "50"
    },

    {
        suit: "clubs",
        name: "queen",
        value: 10,
        id: "51"
    },

    {
        suit: "clubs",
        name: "king",
        value: 10,
        id: "52"
    },
]