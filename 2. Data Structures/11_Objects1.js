const mySymbol = Symbol("key1");

const JsUser ={
    [mySymbol] : "mySymb 1",
    name : "siddhesh",
    age : 19,
    location : "pune",
    emai : "siddhesh@gmail.com",

    greet(){
        console.log("function");
    }
}

console.log(JsUser.name);
console.log(typeof JsUser["name"]);
console.log(JsUser[mySymbol]);

JsUser.name = "Default";
Object.freeze(JsUser); // Dosent allow any changes 
console.log(JsUser);

JsUser.greetings = function(name){
    console.log(`Hello ${name}`);
}

JsUser.greetings();
console.log(JsUser.greetings("Sid"));

console.log(JsUser.greet());


