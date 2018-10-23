
// BlackJack

// Card variables
let suits = [
  'Hearts', 'Clubs', 'Diamonds', 'Spades'
];

let values = [
  'Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven',
  'Six', 'Five', 'Four', 'Three', 'Two'
];

// DOM variables
let textArea    = document.querySelector("#textArea"),
    newGameBtn  = document.querySelector("#newGame-btn"),
    hitBtn      = document.querySelector("#hit-btn"),
    stayBtn     = document.querySelector("#stay-btn");

// Game variables
let isGameStarted   = false,
    isGameOver      = false,
    isPlayerWon     = false,
    dealerCards   = [],
    playerCards   = [],
    dealerScore   = 0,
    playerScore   = 0,
    deck          = [];

// ==========================
// dom handlers
// ==========================
function initialGame(){
  hitBtn.style.display = 'none';
  stayBtn.style.display = 'none';
  isGameOver = false;
}

// to be deleted
function initialDeck(){
  deck = createDeck();
  deck = [
    {suit: 'Clubs', value: 'Four'},
    {suit: 'Diamonds', value: 'Seven'},
    {suit: 'Clubs', value: 'Four'},
    {suit: 'Hearts', value: 'Six'},
    {suit: 'Spades', value: 'Five'},
    {suit: 'Clubs', value: 'Three'},
    {suit: 'Diamonds', value: 'Three'},
    {suit: 'Diamonds', value: 'Jack'}
  ];
}

function startNewGame(){
  hitBtn.style.display = 'inline';
  stayBtn.style.display = 'inline';
  
  isGameStarted = true;
  initialDeck();

  playerCards = [getNextCard(), getNextCard()];
  dealerCards = [getNextCard(), getNextCard()];

  updateScores();  
}

function hit(){
  playerCards.push(getNextCard());
  updateScores();
  if (getScore(playerCards) > 21){
    isGameOver = true;
    determineWinner();
  } else {
    showStatus();
  }
}

function stay(){
  isGameOver = true;
  determineWinner();
  // textArea.innerText = showStatus();
}

initialGame();
newGameBtn.addEventListener('click', startNewGame);
hitBtn.addEventListener('click', hit);
stayBtn.addEventListener('click', stay);
// ==========================
// card handlers
// ==========================
function createDeck(){
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++){
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++){
      let card = {
        suit: suits[suitIdx],
        value: values[valueIdx]
      }
        deck.push(card);
    }
  }  
  return shuffleDeck(deck);
}

function shuffleDeck(deck){
  for (let i = 0; i < deck.length; i++){
    let swapIdx = Math.trunc(Math.random() * deck.length);
    let tmp = deck[swapIdx];
    deck[swapIdx] = deck[i];
    deck[i]       = tmp;
  }
  return deck;
}

function getNextCard(){
  return deck.shift();
}

function getCardString(card){
  return card.value + ' of ' + card.suit;
}

function getCardArrayString(cardArray){
  let cardArrayString = "";
  cardArray.forEach(function(card){
    cardArrayString += "'" + getCardString(card) + "' + ";
  });
  return cardArrayString.substr(0, cardArrayString.length - 2); // -2 to remove the last "+ "
}

function getScore(cardArray){
  let score = 0;
  let hasAce = false;
  cardArray.forEach(function(card){
    let result = "getScore" + " - current card: " + getCardString(card);
    if (card.value === 'Ace'){
      hasAce = true;
    }
    score += getCardNumericValue(card);
    result += " + current score: " + score;
  });
  if (hasAce && (score + 10 <= 21)){
    return score + 10;
  } else {
    return score;
  }
}

function updateScores(){
  playerScore = getScore(playerCards);
  dealerScore = getScore(dealerCards);
  showStatus();
}

function showStatus(){
  let currentStatus =   "Dealer has:\n" + getCardArrayString(dealerCards) +
                "(Score: "      + dealerScore + ")\n" +
                "Player has:\n" + getCardArrayString(playerCards) +
                "(Score: "      + playerScore + ")";
  textArea.innerText = currentStatus
}

function checkForEndGame(){
  updateScores();
  if (isGameOver){
    while (dealerScore < playerScore && dealerScore <= 21 || dealerScore < 15){      
      dealerCards.push(getNextCard());
      updateScores();
    }
  }

  if (dealerScore >= 15 && playerScore > 15){
    if (playerScore > 21){
      isPlayerWon = false;
      isGameOver = true;
    } else if (dealerScore > 21){
      isPlayerWon = true;
      isGameOver = true;
    } else if (isGameOver){
      if (playerScore > dealerScore){
        isPlayerWon = true;
      }
    }
    if (isPlayerWon){
      textArea.innerText += "\n PLAYER WINS!!!";
    } else {
      textArea.innerText += "\n DEALER WINS!!!";
    }    
    initialGame();
  }
}

function determineWinner(){
  // *** this function is called when playerScore >= 21 or STAND button is clicked *** 

  // user clicks HIT --> add more card --> get current score --> 
  //  if playerScore <= 21 then out of this function
  //  if playerScore > 21 
  //    --> if dealerScore < 15 --> loop (add more card --> get current score) until dealerScore >= 15
  //     --> if dealerScore <= 21 --> player loses --> end game --> reset game 
  //      --> else if dealerScore > playerScore --> player wins --> end game --> reset game

  while (dealerScore < 15 || (playerScore <= 21 && dealerScore <= playerScore )){
      dealerCards.push(getNextCard());
      updateScores();
  }
  if (isGameOver){
    if (dealerScore <= 21){
      isPlayerWon = false;
      isGameOver = true;
    } else if (dealerScore > playerScore){
      isPlayerWon = true;
      isGameOver = true;
    }
    
    if (isGameOver && isPlayerWon){
      textArea.innerText += "\n PLAYER WINS!!!";
    } else {
      textArea.innerText += "\n DEALER WINS!!!";
    }
    initialGame();
  }
}

function showCurrentDeck(){
  console.log("Current Deck before chaning: " + getCardArrayString(deck));
}

function getCardNumericValue(card){
  switch(card.value){
    case 'Ace':
      return 1;
    case 'Two':
      return 2;
    case 'Three':
      return 3;
    case 'Four':
      return 4;
    case 'Five':
      return 5;
    case 'Six':
      return 6;
    case 'Seven':
      return 7;
    case 'Eight':
      return 8;
    case 'Nine':
      return 9;
    default: 
      return 10;
  }
}
