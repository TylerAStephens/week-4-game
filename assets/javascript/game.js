$(document).ready(function() {

// generate random number
var myRandom = randomRange(19,120);
var counter = 0;
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
   
}
console.log(myRandom);

// Set target number
var targetNumber = myRandom;
$("#number-to-guess").text(targetNumber);

// add random values to each button
var numberOptions = [10, 5, 3, 7];

// Next we create a for loop to create crystals for every numberOption.
  for (var i = 0; i < numberOptions.length; i++) {
      console.log(numberOptions);
  }
// add 4 buttons
// if clicked on add values to a player score
// Button 1
$(".crystal1-button").on("click", function() {
    counter += 10;
    alert("New Score " + counter + " times!");
    if (counter === targetNumber) {
        alert("You win!");
      }
    else if (counter >= targetNumber) {
        alert("You lose!!");
      }      
});
// Button 2
 $(".crystal2-button").on("click", function() {
    counter += 10;
    alert("New Score " + counter + " times!");
    if (counter === targetNumber) {
        alert("You win!");
      }
    else if (counter >= targetNumber) {
        alert("You lose!!");
      }         
});
// Button 3
$(".crystal3-button").on("click", function() {
    counter += 10;
    alert("New Score " + counter + " times!");
    if (counter === targetNumber) {
        alert("You win!");
      }
    else if (counter >= targetNumber) {
        alert("You lose!!");
      }      
});
// Button 4
$(".crystal4-button").on("click", function() {
    counter += 10;
alert("New Score " + counter + " times!");
if (counter === targetNumber) {
    alert("You win!");
  }
else if (counter >= targetNumber) {
    alert("You lose!!");
  } 
});





// add win and lose to win and loss score

// reset random numener but keep score log

// add reset button to reset all scores
    });