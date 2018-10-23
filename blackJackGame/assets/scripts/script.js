
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
  hitBtn.style.display = 'none'
  stayBtn.style.display = 'none'
}

function startNewGame(){
  hitBtn.style.display = 'inline';
  stayBtn.style.display = 'inline';
  
  isGameStarted = true;
  deck = createDeck();
  playerCards = [getNextCard(), getNextCard()];
  dealerCards = [getNextCard(), getNextCard()];

  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
  
  textArea.innerText = showStatus();
}

function hit(){
  playerCards.push(getNextCard());
  playerScore = getScore(playerCards);
  checkForEndOfGame();
  // textArea.innerText = showStatus();
}

function stay(){
  isGameOver = true;
  checkForEndOfGame();
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
    if (card.value === 'Ace'){
      hasAce = true;
    }
    score += getCardNumericValue(card);
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
  let result =  "Dealer has:\n" + getCardArrayString(dealerCards) +
                "(Score: "      + dealerScore + ")\n" +
                "Player has:\n" + getCardArrayString(playerCards) +
                "(Score: "      + playerScore + ")";
  return result;
}

function checkForEndOfGame(){
  updateScores();

  if (isGameOver){
    while (dealerScore < playerScore && playerScore <= 21 && dealerScore <= 21){
      dealerCards.push(getNextCard());
      updateScores();
    }
  }

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
