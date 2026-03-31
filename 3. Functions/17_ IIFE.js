//Immediately Invoked Function Expressions

(function db(){
    console.log("db connected"); 
})();

( dbconnection = (name) => {
    console.log(`${name}db connected arrow`)
})("mongo ")