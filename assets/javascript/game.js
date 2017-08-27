$(document).ready(function() {

// generate random number
var myRandom = randomRange(19,120);
var counter = 0;
var winCounter = 0;
var lossCounter = 0;
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
   
}
console.log(myRandom);

// Set target number
var targetNumber = myRandom;
$("#number-to-guess").text(targetNumber);

// add random values to each button//////////
var jNumberOne = randomJNumber(1,12);
function randomJNumber(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var jNumberTwo = randomJNumber(1,12);
function randomJNumber(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var jNumberThree = randomJNumber(1,12);
function randomJNumber(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
var jNumberFour = randomJNumber(1,12);
function randomJNumber(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(jNumberOne);
console.log(jNumberTwo);
console.log(jNumberThree);
console.log(jNumberFour);
////////////////////////////////////

    
// add 4 buttons
// if clicked on add values to a player score
// Button 1

$(".crystal1-button").on("click", function() {
    counter += jNumberOne;
    alert("New Score " + counter + " times!");
    if (counter === targetNumber) {
        winCounter++;
        document.getElementById("win-counter").innerHTML = winCounter;
        alert("You win!");
      }
    else if (counter >= targetNumber) {
        alert("You lose!!");
        lossCounter++;
        document.getElementById("loss-counter").innerHTML = lossCounter;
      }     
      $("#total-score").text(counter);
      console.log(counter); 
});
// Button 2
 $(".crystal2-button").on("click", function() {
    counter += jNumberTwo;
    alert("New Score " + counter + " times!");
    if (counter === targetNumber) {
        winCounter++;
        document.getElementById("win-counter").innerHTML = winCounter;
        alert("You win!");
      }
    else if (counter >= targetNumber) {
        alert("You lose!!");
        lossCounter++;
        document.getElementById("loss-counter").innerHTML = lossCounter;
      }   
      $("#total-score").text(counter);
      console.log(counter);       
});
// Button 3
$(".crystal3-button").on("click", function() {
    counter += jNumberThree;
    alert("New Score " + counter + " times!");
    if (counter === targetNumber) {
        winCounter++;
        document.getElementById("win-counter").innerHTML = winCounter;
        alert("You win!");
      }
    else if (counter >= targetNumber) {
        alert("You lose!!");
        lossCounter++;
        document.getElementById("loss-counter").innerHTML = lossCounter;
      }  
      $("#total-score").text(counter);
      console.log(counter);     
});
// Button 4
$(".crystal4-button").on("click", function() {
    counter += jNumberFour;
alert("New Score " + counter + " times!");
if (counter === targetNumber) {
    winCounter++;
    document.getElementById("win-counter").innerHTML = winCounter;
    alert("You win!");
  }
else if (counter >= targetNumber) {
    alert("You lose!!");
    lossCounter++;
    document.getElementById("loss-counter").innerHTML = lossCounter;
}
$("#total-score").text(counter);
console.log(counter);

});

});



// add win and lose to win and loss score

// reset random numener but keep score log

// add reset button to reset all scores
