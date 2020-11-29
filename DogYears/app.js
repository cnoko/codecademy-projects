//my current age
const myAge = 28;
//my name
let myName = 'Bobby';
//my early years which are special
let earlyYears = 2;


earlyYears *= 10.5;

//first two years are already accounted for 
let laterYears = myAge -2;

//making them as a dog
laterYears *= 4;
let myAgeInDogYears = earlyYears + laterYears;
//make the letters in lower case of my name
myName = myName.toLowerCase();
/*
console.log(`Early years: ${earlyYears}`);
console.log(`Later Years: ${laterYears}`);
console.log(`My dog years should be: ${myAgeInDogYears}`);
*/
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)