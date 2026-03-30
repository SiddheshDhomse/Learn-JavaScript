let Mydate = new Date();
// console.log(Mydate);
// console.log(Mydate.toString());
// console.log(Mydate.toDateString());
// console.log(Mydate.toLocaleString());

let myTimestamp = Date.now();
// console.log(myTimestamp);


let newDate = new Date(myTimestamp);
console.log(newDate.toLocaleString());
console.log(newDate.getMonth());
