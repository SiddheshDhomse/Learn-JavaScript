const number =10;
console.log(number);

const balance = new Number(100.05); //Mentioning data types
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));
console.log(balance.toPrecision(3));  

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));


console.log(Math);
console.log(Math.PI);
console.log(Math.E);

console.log(Math.round(9.7));
console.log(Math.floor(8.9));

console.log(Math.max(2,45,1,5));
console.log(Math.min(2,45,1,5));


console.log(Math.floor(Math.random()*10) + 1);

const max = 20;
const min = 10;
console.log(Math.random()* (max - min + 1) + min);



//name = new String("siddhesh")
//console.log(name);