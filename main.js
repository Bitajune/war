/*--- constants ---*/
//these are constant in your game. dont change
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
  currentCpuCard;

const playerCards = {
  value: [],
  image: []
};
const cpuCards = {
  value: [],
  image: []
};

/*--- cached element references ---*/
const pScore = document.querySelector(".leftScore");

const pCardsLeft = document.querySelector(".leftCardsLeft");

const pTurnsWon = document.querySelector(".leftTurnsWon");

const cScore = document.querySelector(".rightScore");

const cCardsLeft = document.querySelector(".rightCardsLeft");

const cTurnsWon = document.querySelector(".rightTurnsWon");

const button = document.querySelector(".draw");

/*----- event listeners -----*/
// document.querySelector("button").addEventListener("click");

/*----- functions -----*/
//here you write your javascript functions. all the logic of the game. run init first!! MOST END WITH RENDER DONT FORGET
initialize();

function initialize() {}

// document.querySelector("button").addEventListener("click", draw(){
//     document.getElementByClassName("face").setAttribute("src", changingImages) = "Hello World";
//   });

//   var changingImages = "./assets/cards/Clubs/8.png"
