"use strict";

function loopNums(){
    let num = 1;

    while(num >= 65536){
        console.log(num)
        num *= 2;
    }
}

loopNums();