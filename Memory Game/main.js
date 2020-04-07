



let cards= ["queen", "queen", "king", "king"];
let cardsInPlay= [];
let CardOne= cards[0];
let CardTwo= cards[2];
cardsInPlay.push(CardOne);
cardsInPlay.push(CardTwo);

console.log("User fliped "+cards[0]);
console.log(cardsInPlay);

if(cardsInPlay.length == 2)
{ CardOne==CardTwo? console.log("Found a match"): console.log("not Yet");}
