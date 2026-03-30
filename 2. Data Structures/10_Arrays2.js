const avengers = ["Ironman", "Thor" , "Captain America"];

const dc = ["Superman", "Batman", "Flash"];
avengers.push(dc); // Pushes the whole array "dc" as a element in the "avengers" arrayconsole.log(avengers);


const newHeros = avengers.concat(dc);
console.log(newHeros);

const allHeros = [...avengers, ...dc, "wonder woman"]; // splits as indivisual elements
console.log(allHeros);



const arr2 = [1,2,3,4,5, [7,8,9] , [10,11,12,[13,14,15]]];

const usableArr2 = arr2.flat(Infinity);
console.log(usableArr2);


Array.isArray("Hello World");
console.log(Array.isArray("Hello World"));

console.log(Array.from("Hello World"));


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
 