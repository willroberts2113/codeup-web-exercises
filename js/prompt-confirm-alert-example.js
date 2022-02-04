"use strict";


function getName(){
    let addMoreNames = true;
    let username = ""
    while (addMoreNames){
        username += prompt("What is your name?");
        addMoreNames = confirm("Would you like to add another name?");
        if (addMoreNames){
            username += " "
        }
    }
    return username;
}

function showName(username){
    alert("Your name is " + username);
}

showName(getName());