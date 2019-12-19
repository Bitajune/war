/*--- constants ---*/
const deck = [
  {
    value: 2,
    image: "./assets/cards/Hearts/2.png"
  },
  {
    value: 2,
    image: "./assets/cards/Diamonds/2.png"
  },
  {
    value: 2,
    image: "./assets/cards/Clubs/2.png"
  },
  {
    value: 2,
    image: "./assets/cards/Spades/2.png"
  },
  {
    value: 3,
    image: "./assets/cards/Hearts/3.png"
  },
  {
    value: 3,
    image: "./assets/cards/Diamonds/3.png"
  },
  {
    value: 3,
    image: "./assets/cards/Clubs/3.png"
  },
  {
    value: 3,
    image: "./assets/cards/Spades/3.png"
  },
  {
    value: 4,
    image: "./assets/cards/Hearts/4.png"
  },
  {
    value: 4,
    image: "./assets/cards/Diamonds/4.png"
  },
  {
    value: 4,
    image: "./assets/cards/Clubs/4.png"
  },
  {
    value: 4,
    image: "./assets/cards/Spades/4.png"
  },
  {
    value: 5,
    image: "./assets/cards/Hearts/5.png"
  },
  {
    value: 5,
    image: "./assets/cards/Diamonds/5.png"
  },
  {
    value: 5,
    image: "./assets/cards/Clubs/5.png"
  },
  {
    value: 5,
    image: "./assets/cards/Spades/5.png"
  },
  {
    value: 6,
    image: "./assets/cards/Hearts/6.png"
  },
  {
    value: 6,
    image: "./assets/cards/Diamonds/6.png"
  },
  {
    value: 6,
    image: "./assets/cards/Clubs/6.png"
  },
  {
    value: 6,
    image: "./assets/cards/Spades/6.png"
  },
  {
    value: 7,
    image: "./assets/cards/Hearts/7.png"
  },
  {
    value: 7,
    image: "./assets/cards/Diamonds/7.png"
  },
  {
    value: 7,
    image: "./assets/cards/Clubs/7.png"
  },
  {
    value: 7,
    image: "./assets/cards/Spades/7.png"
  },
  {
    value: 8,
    image: "./assets/cards/Hearts/8.png"
  },
  {
    value: 8,
    image: "./assets/cards/Diamonds/8.png"
  },
  {
    value: 8,
    image: "./assets/cards/Clubs/8.png"
  },
  {
    value: 8,
    image: "./assets/cards/Spades/8.png"
  },
  {
    value: 9,
    image: "./assets/cards/Hearts/9.png"
  },
  {
    value: 9,
    image: "./assets/cards/Diamonds/9.png"
  },
  {
    value: 9,
    image: "./assets/cards/Clubs/9.png"
  },
  {
    value: 9,
    image: "./assets/cards/Spades/9.png"
  },
  {
    value: 10,
    image: "./assets/cards/Hearts/10.png"
  },
  {
    value: 10,
    image: "./assets/cards/Diamonds/10.png"
  },
  {
    value: 10,
    image: "./assets/cards/Clubs/10.png"
  },
  {
    value: 10,
    image: "./assets/cards/Spades/10.png"
  },
  {
    value: 11,
    image: "./assets/cards/Hearts/Jack.png"
  },
  {
    value: 11,
    image: "./assets/cards/Diamonds/Jack.png"
  },
  {
    value: 11,
    image: "./assets/cards/Clubs/Jack.png"
  },
  {
    value: 11,
    image: "./assets/cards/Spades/Jack.png"
  },
  {
    value: 12,
    image: "./assets/cards/Hearts/Queen.png"
  },
  {
    value: 12,
    image: "./assets/cards/Diamonds/Queen.png"
  },
  {
    value: 12,
    image: "./assets/cards/Clubs/Queen.png"
  },
  {
    value: 12,
    image: "./assets/cards/Spades/Queen.png"
  },
  {
    value: 13,
    image: "./assets/cards/Hearts/King.png"
  },
  {
    value: 13,
    image: "./assets/cards/Diamonds/King.png"
  },
  {
    value: 13,
    image: "./assets/cards/Clubs/King.png"
  },
  {
    value: 13,
    image: "./assets/cards/Spades/King.png"
  },
  {
    value: 14,
    image: "./assets/cards/Hearts/Ace.png"
  },
  {
    value: 14,
    image: "./assets/cards/Diamonds/Ace.png"
  },
  {
    value: 14,
    image: "./assets/cards/Clubs/Ace.png"
  },
  {
    value: 14,
    image: "./assets/cards/Spades/Ace.png"
  }
];

/*--- app's state (variables) ---*/
let playerResults,
  cpuResults,
  playerScore,
  cpuScore,
  currentPlayerCard,
  playerWin = 0,
  cpuWin = 0,
  currentCpuCard;
let pCard;
let cCard;
let modalMessage;
let playerCards = [];
let cpuCards = [];
let playersWarCards = [];
let cpuWarCards = [];
let whipLash = new Audio("./assets/8whip.wav");

/*--- cached element references ---*/
const pScore = document.querySelector(".leftScore");

const pCardsLeft = document.querySelector(".leftCardsLeft");

const pTurnsWon = document.querySelector(".leftTurnsWon");

const cScore = document.querySelector(".rightScore");

const cCardsLeft = document.querySelector(".rightCardsLeft");

const cTurnsWon = document.querySelector(".rightTurnsWon");

const button = document.querySelector(".draw");

const pImg = document.querySelector(".player-card");

const cImg = document.querySelector(".cpu-card");

const flipCards = document.querySelectorAll(".flip-card-inner");

/*--- event listeners ---*/
document.querySelector("button").addEventListener("click", deal);

/*--- functions ---*/
initialize();

function initialize() {
  modalMessage = "It's War";
  const gameDeck = [...shuffleCards(deck)];
  playerCards = [...gameDeck.splice(0, Math.ceil(gameDeck.length / 2))];
  cpuCards = [...gameDeck];
  keepScore();
}

function render() {
  pImg.src = pCard.image;
  cImg.src = cCard.image;
  flipCard(180, flipCards);
}

function keepScore() {
  pCardsLeft.innerHTML = `Cards Left: ${playerCards.length}`;
  cCardsLeft.innerHTML = `Cards Left: ${cpuCards.length}`;
  pTurnsWon.innerHTML = `Turns Won: ${playerWin}`;
  cTurnsWon.innerHTML = `Turns Won: ${cpuWin}`;
}

function shuffleCards(gameDeck) {
  var j, x, i;
  for (i = gameDeck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = gameDeck[i];
    gameDeck[i] = gameDeck[j];
    gameDeck[j] = x;
  }
  return gameDeck;
}

function deal() {
  whipLash.play();
  this.disabled = true;
  pCard = playerCards.pop();
  cCard = cpuCards.pop();
  render();
  checkForWin(pCard, cCard);
  setTimeout(() => {
    this.disabled = false;
    flipCard(0, flipCards);
  }, 1000);
}

function flipCard(degNum, cards) {
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.transform = `rotateY(${degNum}deg)`;
  }
}

function checkForWin(pCard, cCard) {
  if (pCard.value > cCard.value) {
    winRound();
  } else if (pCard.value < cCard.value) {
    loseRound();
  } else if (pCard.value === cCard.value) {
    setTimeout(() => tieWar(), 1000);
  }
}

function winRound() {
  playerCards.unshift(
    pCard,
    cCard,
    ...playersWarCards.splice(0),
    ...cpuWarCards.splice(0)
  );
  playerWin += 1;
  render();
  keepScore();
}

function loseRound() {
  cpuCards.unshift(
    pCard,
    cCard,
    ...playersWarCards.splice(0),
    ...cpuWarCards.splice(0)
  );
  cpuWin += 1;
  render();
  keepScore();
}

function tieWar() {
  modalMessage = "It's War!";
  modal();
  for (let i = 0; i < 3; i++) {
    playersWarCards.push(playerCards.pop());
    cpuWarCards.push(cpuCards.pop());
  }
  setTimeout(() => tieCardsFlip(), 2000);
  setTimeout(() => {
    flipCard(0, flipCards);
  }, 2000);
  render();
  checkForWin(pCard, cCard);
}

function tieCardsFlip() {
  pCard = playerCards.pop();
  cCard = cpuCards.pop();
}

function gameWon() {
  if (playerCards.length === 52) {
    modalMessage = "Yee Haw! You won!";
    modal();
  } else if (cpuCards.length === 52) {
    modalMessage = "Better luck next time, cowboy!";
    modal();
  }
}

//------MODAL------
function modal() {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  const warMessage = document.querySelector(".war");
  modal.style.display = "block";
  warMessage.innerText = modalMessage;
  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
