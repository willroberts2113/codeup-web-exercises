"use strict"

function getNames(){
    let namesArr = [];
    let hasMoreNames = true;
    while(hasMoreNames){
        namesArr.push(prompt("Please enter your desired name"));
        hasMoreNames = confirm("Would you like to enter another name");
    }
    return namesArr;
}

getNames();