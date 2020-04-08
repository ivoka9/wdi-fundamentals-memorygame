

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
let cardsInPlay= [];

function  checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
   }
                        }


function flipCard (cardId){

console.log("User fliped " +cards[cardId].rank+"  "+cards[cardId].cardImage);
cardsInPlay.push(cards[cardId].rank);
if(cardsInPlay.length==2){checkForMatch();}

                          }

flipCard(1);
flipCard(3);


console.log(cardsInPlay);

/*  if(cardsInPlay.length == 2)
{ CardOne==CardTwo? console.log("Found a match"): console.log("not Yet");}
*/
