/*
const user = {
    username:"User",
    age:  21,

    greetings: function(){
        console.log(`${this.username} has logged in`);
    }
}

user.greetings();
user.username = "New User";
user.greetings();

console.log(this);
*/

const logThis = function (){
    username = "siddhesh";
    console.log("normal function");
}
logThis();

const arrow = () => {
    console.log("arrow function");
}

const add = (a,b) => (a+b);
console.log(add(1,2));