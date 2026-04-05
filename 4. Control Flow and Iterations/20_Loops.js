/*
//FPR LOOP
for (let index = 0; index < 10; index++) {
    //console.log(index);
}

let arr = [] ;

let i =10;
let j =0;


//WHILE LOOP
while(i >= j){
    arr.push(j);
    //console.log(`pushed element ${j}`);
    //console.log(arr);
    j++;
}



//DO WHILE LOOP
let idx = 0;

do{
    //console.log(idx);
    idx++
}while(idx <= 10)

  
    
//FOR of
for(const num of arr){
    console.log(num);
}    

const name = "siddhesh";

for(const char of name){
    console.log(char);
}

const map = new Map()
map.set("name", "siddhesh");
map.set("age", 22);
map.set("gender", "male");

console.log(map);

for(const [Key,value] of map){
    console.log(Key, " - " , value);
}
*/

const myObj = {
    name: "siddhesh",
    age: 22,
    gender: "male"
}

for(const it in myObj){
    console.log(it);
}

const arrName = ["Sid", "Babul" , "Amogh"];

arrName.forEach(element => {
    console.log(element);
});

