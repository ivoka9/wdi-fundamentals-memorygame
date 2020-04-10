let cardElement;
let cardsInPlay= [];
var cardId;

function works(){
  console.log("works")
}
// TRIED but it didint work.. the event lisener never lisend...
/*
function createBoard() {
for(let i=0; i<4 ; i++){

   cardElement = document.createElement('img');
 cardElement.setAttribute('src','images/back.png');
 cardElement.setAttribute('data-id',i);
  cardElement.addEventListener('click ',flipCard ());

 document.getElementById('game-board').appendChild(cardElement);

 console.log(cardElement);

}

// cardElement.setAttribute('src','images/back.png');
}
*/

let cards= [
  {rank: "king",
  suit: "hearts",
cardImage:"images/king-of-diamonds.png"},
  {rank: "king",
suit: "diamonds",
cardImage: "images/king-of-hearts.png"},
  {rank: "queen",
suit: "hearts",
cardImage:"images/queen-of-hearts.png"},
  {rank: "queen",
suit: "diamonds",
cardImage:"images/queen-of-diamonds.png"}
];


function  checkForMatch(){


  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");

  } else {
console.log("Sorry, try again.");

   }
                        }


function flipCard (n){

switch (n){

  case 'QoD' :
 console.log("works");
 cardId=3 ;
 document.getElementById('QoD').src= "images/queen-of-diamonds.png";
break;

    case 'QoH' :
    document.getElementById('QoH').src= "images/queen-of-hearts.png";
cardId=2 ;
break;

      case 'KoD' :
      document.getElementById('KoD').src= "images/king-of-diamonds.png";
cardId=1 ;
break;
      case 'KoH' :
      document.getElementById('KoH').src= "images/king-of-hearts.png";
cardId=0 ;
break;
}
cardsInPlay.push(cards[cardId].rank);

if(cardsInPlay.length==2){checkForMatch();}

                          }


console.log(cardsInPlay);


 // createBoard();
