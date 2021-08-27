// variable set for deck of cards as well as player hands and dealer hand.
const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades'];
var deck = [ 1,2,3,4,5,6,7,8,9,10,10,10,10,10,11,
             1,2,3,4,5,6,7,8,9,10,10,10,10,10,11,
             1,2,3,4,5,6,7,8,9,10,10,10,10,10,11,
             1,2,3,4,5,6,7,8,9,10,10,10,10,10,11,];
 var playerHand;
 var dealerHand;

// created a function to draw random cards from deck.
 function drawRandomCard(deck){
    var randomIndex = Math.floor(deck.length * Math.random());
    return deck[randomIndex];
}
// function starting game and dealing 2 random cards to each player.
function startGame (){
    playerHand = [drawRandomCard(deck), drawRandomCard(deck)];
    dealerHand = [drawRandomCard(deck), drawRandomCard(deck)];
}
// created for loop to get value of hand for both players
function getHandValue(hand){
    var sum = 0;
    for(var i=0; i<hand.length; i++){
        sum += hand[i];

    }
    return sum;
}
startGame();
// created a function for both "hit button" "stand button" also the "BUST"
function hit(){
    console.log("click")
   playerHand.push(drawRandomCard(deck));
    console.log('new player hand: ' + playerHand)
    if(getHandValue(playerHand) > 21){
        document.getElementById("game-status").innerHTML = "BUST";
    }
}
function stand(){
    console.log("stand")
}

// returns the elements that has given ID which is passed to function
document.getElementById("player-hand").innerHTML = playerHand;
document.getElementById("dealer-hand").innerHTML = dealerHand;
document.getElementById("dealer-hand-value").innerHTML = getHandValue(dealerHand);
document.getElementById("player-hand-value").innerHTML = getHandValue(playerHand);
