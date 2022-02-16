"use strict"

// Create an object representing a person. It should have properties representing:
//     names (an array of strings)
// date of birth
// occupation
// Hard code some values in that object, then log it and its properties to the console

// Defines a contact info object
function ContactInfo(phoneNumber, streetAddress, city, state, postalCode, emailAddress){
    this.phoneNumber = phoneNumber;
    this.streetAddress = streetAddress;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.emailAddress = emailAddress;
}
// Defines a person object
function Person(names, occupation, dob, contactInfo) {
    this.names = names;
    this.occupation = occupation;
    this.dob = dob;
    this.contactInfo = contactInfo;
}
// makes a new person object instance (by invoking the constructor)
let person2 = new Person(
    ["Casey", "J", "Edwards"],
    "Cat Herder / Firefighter",
    "11.30.1989",
    new ContactInfo(
        '123.456.7890',
        '123 Anywhere Ln',
        'Beverly Hills',
        'CA',
        '90210',
        'nope@no-no-no.no'));

console.log(person2.contactInfo.emailAddress);
