
// first select a number.
var fixedNumber = Math.floor((Math.random() * 100) + 1);

console.log(fixedNumber);

var triesCount = 0;


function guessNumber() {
    if (triesCount == 11) {
        document.getElementById('resultText').innerHTML = "GAME OVER";
        return;
    }

    // get the user input from the form
    var userNumber = document.getElementById('numberInput').value;

    document.getElementById('numberInput').value = "";



    // compare the numbers and show the result.

    if (userNumber > fixedNumber) {

        document.getElementById('resultText').innerHTML = "Your guess " + userNumber + " is too high";

    }


    if (userNumber < fixedNumber) {
        document.getElementById('resultText').innerHTML = "Your guess " + userNumber + " is too low";
    }

    if (userNumber == fixedNumber) {
        document.getElementById('resultText').innerHTML = "Your guess " + userNumber + " is correct";
    }

    triesCount = triesCount + 1;

    // incrementing the triesCount values.
    document.getElementById('triesText').innerHTML = triesCount;

    //number.

}
