"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name){
    console.log("Hello, " + name + "!");
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// let helloMessage = sayHello("Will")
// console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

let myName = "Will"
sayHello(myName);

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

function isTwo(random){
}
console.log(random);

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

// let tipPercentage = 0.25;
// let totalBill = 25.50;
function calculateTip(tipPercentage, totalBill){
    let tip = tipPercentage * totalBill;
    console.log(tip);
    return tip;
}
// calculateTip(tipPercentage, totalBill);

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

let totalBill = prompt("How much is your total bill?");
let tipPercentage = prompt("What percentage would you like to tip? (example: .25 for 25% tip): ");
alert("Your calculated tip is: $" + (calculateTip(totalBill, tipPercentage)));

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var discountPercent = .2; // 20%
 * > applyDiscount(originalPrice, discountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

let originalPrice = 100;
let discountPercent = (Math.random() * (.01 - .001) + .001).toFixed(4);
function applyDiscount(originalPrice, discountPercent){
    let discount = originalPrice * discountPercent;
    return discount;
}
applyDiscount(originalPrice, discountPercent);

/* Create a function called getToDestination which will help determine how a person can get to their destination!
    It will accept 4 arguments and the parameter names are:
    age - the age of the rider
isInsured - a boolean telling the function if the rider has insurance
hasCar - a boolean describing if the rider has a car
canGetRideshare - boolean describing if the rider can get a ride share (Uber, etc)
If the rider is over 16, has insurance, and has a car then they can use their own vehicle
If the rider is not over 16, has no insurance, OR has no car but they CAN get a rideshare, then they call up a rideshare service
If the rider meets none of the above, they should call a friend for a ride!
    This getToDestination should not return any value, but rather console log based on the conditions met.
    getToDestination, part 2
Create a function called canGetRideshare() which will RETURN a boolean
It will determine if there are drivers nearby and the person has enough money for the ride
Now, when you call getToDestination(), instead of passing in a canGetRideShare parameter
Call canGetRideshare() in the else if after !isLegalDriver &&...
Be sure to log to the user if they can or cannot get a rideshare */

let age = 16;
let isInsured = true;
let hasCar = true;

function getToDestination(age, isInsured, hasCar, canGetRideshare){
    if (age >= 16 && isInsured && hasCar) {
        console.log("Rider can use their own vehicle");
    }else if(age < 16 && (!isInsured || !hasCar) && canGetRideshare){
        console.log("Rider can call for a rideshare");
    }else{
        console.log("Rider should call a friend for a ride");
    }
}

let driverNearby = true;
let hasMoneyForRide = true;

function canGetRideshare(driverNearby, hasMoneyForRide){
    if(driverNearby && hasMoneyForRide){
        return true;
    }else{
        return false;
    }
}

getToDestination(age, isInsured, hasCar, canGetRideshare(driverNearby, hasMoneyForRide));


