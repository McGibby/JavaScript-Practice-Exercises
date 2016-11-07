//Guess the number between 1-10 with number set at random

var number = Math.floor((Math.random() * 10) + 1);
var guess = prompt("Guess the number between 1 and 10");

function guesses(){
if (guess==number){
    	 alert("You are correct");
         guess = false;}
   else if (guess>number){
  	 alert("Lower");
      guess = prompt("Guess again");}
   else if (guess<number){
  	 alert("Higher");
     guess =prompt("Guess again");}
}

while(guess){
    guesses();
}
//-------------------------------------------------------------

//Guess the number between 1-100 with number preset
var number = 4;
var guess = prompt("Guess the number between 1 and 10");

function guesses(){
if (guess==number){
    	 alert("You are correct");
         guess = false;}
   else if (guess>number){
  	 alert("Lower");
      guess = prompt("Guess again");}
   else if (guess<number){
  	 alert("Higher");
     guess =prompt("Guess again");}
}

while(guess){
    guesses();
}
//-----------------------------------------------------------------

//Guess the number between 1-100 with number preset and no loop
var number=24
var guess = prompt("Guess a number between 1 and 100");

if(guess==number){
	console.log("Correct");}
else if (guess<number){
	console.log("Higher");}
else{
	console.log("Lower");}
