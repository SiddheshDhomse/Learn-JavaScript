const arrnums = [1,2,3];


const initialVal = 10;

const sum = arrnums.reduce(function(acc, currval) {
    console.log(acc);
    return acc + currval;

},initialVal);

const total = arrnums.reduce((acc,currval) => acc + currval,0)

console.log(total);