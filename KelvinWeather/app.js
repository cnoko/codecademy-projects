//forecast of today in Kelvin
const kelvin = 0;
//Another forecast of today in Celsius
const celsius = (kelvin - 273);

//Fahrenheit celculation
let fahrenheit =celsius *(9/5)+32;
//Newton calculation
let newton = celsius*(33/100);

//converting to use temperature;
fahrenheit = Math.floor(fahrenheit);
newton = Math.floor(newton);

console.log(`The temperature today is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature today is ${kelvin} degrees Kelvin`);
console.log(`The temperature today is ${newton} degrees Newton`);
