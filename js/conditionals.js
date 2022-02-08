"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/* function analyzeColor(color){
    if (color == "red"){
        console.log(color + " is the color of strawberries")
    }else if(color == "orange"){
        console.log(color + " is the color of the oranges")
    }else if(color == "yellow"){
        console.log(color + " is the color of bananas")
    }else if(color == "green"){
        console.log(color + " is the color of emeralds")
    }else if(color == "blue"){
        console.log(color + " is the color of the sky")
    }else if (color == "indigo"){
        console.log(color + " is the color of sapphires")
    }else if (color == "violet") {
        console.log(color + " is the color of amethyst")
    }else{
        console.log("I don't know anything about that color")
    }
}
*/

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor)

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

function analyzeColor(randomColor){
    switch (randomColor){
        case("red"):
            console.log(randomColor + " is the color of strawberries");
            break;
        case("orange"):
            console.log(randomColor + " is the color of the oranges");
            break;
        case("yellow"):
            console.log(randomColor + " is the color of bananas");
            break;
        case("green"):
            console.log(randomColor + " is the color of emeralds");
            break;
        case("blue"):
            console.log(randomColor + " is the color of the sky");
            break;
        case("indigo"):
            console.log(randomColor + " is the color of sapphires");
            break;
        case("violet"):
            console.log(randomColor + " is the color of amethyst");
            break;
        default:
            console.log("I don't know anything about that color");
            break;
    }
}

analyzeColor(requestColor())

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function requestColor(){
    return prompt("What is your favorite color?");
}

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

let luckyNumber = Math.floor(Math.random() * 6);
let totalAmount = prompt("What is your total bill is dollars?:  ");
let newAmount = 0;

function calculateTotal(luckyNumber, totalAmount) {
    switch (luckyNumber) {
        case(1):
            newAmount = totalAmount - totalAmount * .1;
            console.log("You receive a 10% discount!  Your new total is: $" + newAmount);
            break;
        case(2):
            newAmount = totalAmount - totalAmount * .25;
            console.log("You receive a 25% discount!  Your new total is: $" + newAmount);
            break;
        case(3):
            newAmount = totalAmount - totalAmount * .35;
            console.log("You receive a 35% discount!  Your new total is: $" + newAmount);
            break;
        case(4):
            newAmount = totalAmount - totalAmount * .5;
            console.log("You receive a 50% discount!  Your new total is: $" + newAmount);
            break;
        case(5):
            console.log("You receive a 100% discount!  Everything is Free!");
            break;
        default:
            console.log("Unfortunately, you do not qualify for a discount.  Your total is: $" + totalAmount)
    }
    alert("Your lucky number was " + luckyNumber + ".");
    alert("Your original price was $" + totalAmount + ".");
    alert("Your price after discount is $" + newAmount + ".");
}

calculateTotal(luckyNumber, totalAmount)

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let provideNumber = confirm("Would you like to add a number?");

function getNumber(provideNumber){
    while (provideNumber) {
        let numInput = prompt("What is your number?");
        if (numInput === !NaN) {
            alert("That is not a number.  Please try again.");
        }else{
            if(numInput % 2 == 0){
                alert("Your number is an even number.");
            }else{
                alert("Your number is an odd number.");
            }
            alert("Your number when multiplied by 100 is: " + (numInput * 100) + ".");
            if(numInput < 0){
                alert("Your number is a negative number.");
            }
            else{
                alert("Your number is a positive number.");
            }
            return provideNumber = false;
        }
    }
}

getNumber(provideNumber);