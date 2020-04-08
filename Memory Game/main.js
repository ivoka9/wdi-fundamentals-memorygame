

let cards= ["queen", "queen", "king", "king"];
let cardsInPlay= [];

function  checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
   }
                        }


function flipCard (cardId){

console.log("User fliped " +cards[cardId]);
cardsInPlay.push(cards[cardId]);
if(cardsInPlay.length==2){checkForMatch();}

                          }

flipCard(1);
flipCard(3);


console.log(cardsInPlay);

/*  if(cardsInPlay.length == 2)
{ CardOne==CardTwo? console.log("Found a match"): console.log("not Yet");}
*/
