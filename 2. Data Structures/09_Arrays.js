// Arrays in javascript have no strict datatype and are resizable 

const myArray = [1,2,3,4,5,6,7,8,9];
console.log(myArray);
console.log(myArray.length);

console.log(myArray[2]);

/*Array Methods*/

myArray.push(10);
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(0);             //Adds element at the start of the array
console.log(myArray);

myArray.shift();
console.log(myArray);

console.log(myArray.includes(9));   
console.log(myArray.indexOf(9));

const newArray = myArray.join(); //copys and converts it to a string
console.log(newArray);  

const arr1 = myArray.slice(0,3);
console.log(arr1);

console.log(myArray.splice(0, 3));  // Splice deletes the range from the oringal array
console.log(myArray);








