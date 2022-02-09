"use strict";

// let num = 8;
// while (num < 50){
//     if(num % 2 == 0){
//         console.log(num);
//     }
//     num++
// }
// console.log("The loop has ended")

// let fullNameEntered = false;
// let names = "";
// // WE DON'T KNOW HOW MANY NAMES THEY HAVE!
// while (!fullNameEntered){
//         names += prompt("Please enter or add to your name") + " ";
//         fullNameEntered = confirm("Is this your full name?");
//         if(fullNameEntered){
//             alert("This is your name: " + names);
//         }
// }

// // TODO: A parking lot with 30 parking spaces wants to display the amount of spaces available as it gets filled.
//  Let's assume that they are allowing two cars into the parking lot at a time. As those cars take up spaces,
//  write a do-while loop that prints the spaces available. If the parking lot gets filled, print "this parking lot
//  is now full" to the console.

// let numSpaces = 30;
// console.log("Welcome to the OverPricedParkingGarage FunCenter!");
// do {
//     console.log("There are " + numSpaces + " remaining!");
//     numSpaces -=2;
// }while(numSpaces)
// console.log("The parking garage is full!");

TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
//  correct password is given.

let password = "password123";
let isCorrect = false;
let attempt = '';
while(isCorrect){
    attempt = prompt("Please enter your password...");
    isCorrect = (attempt === password);
    if(!isCorrect){
        alert("That was no the correct password...");
    }
    alert("That is the correct password!");
}






