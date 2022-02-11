"use strict";

// let num = 7;
// function showMultiplicationTable(num){
//     for(let i = 1; i <= 10; i++){
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }
// showMultiplicationTable(num);

// function oddOrEven(){
//     for(let i = 1; i <= 10; i++){
//         let num = Math.floor(Math.random() * (200- 20) + 20);
//         if(num % 2 == 0){
//             console.log(num + " is an even number");
//         }else{
//             console.log(num + " is an odd number");
//         }
//     }
// }
// oddOrEven();

function scaleNum() {
    for (let i = 1; i <= 9; i++) {
        let numString = "";
        do{
            numString = numString + i.toString();
        }while(numString.length <= i - 1);
        console.log(numString);
    }
}
scaleNum();

// function minusFive(){
//     let num = 100;
//     for (let i = 1; num >= 5; i++){
//         console.log(num);
//         num = num - 5;
//     }
// }
// minusFive();





