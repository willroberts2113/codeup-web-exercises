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

// TODO: using prompt() and alert(), write a while loop that will continue to ask for the correct password until the
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

// .........................................

function loopNums(){
    let num = 1;

    while(num >= 65536){
        console.log(num)
        num *= 2;
    }
}

loopNums();


// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.
//
//
// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
// The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones








