
function sayName(){
    console.log("siddhesh");
    
}

sayName();

function addTwoNums(num1, num2){
    return num1+num2;
}

let result = addTwoNums(1, 3);
console.log(result);


function loginUser(username){
    if(username === String){
    return `Hey ${username} is logged in successfully`; 
    }else {
        console.log("Enter valid values");
    }
}

let status = loginUser(10);
console.log(status);
 

function calculateTotalPrice(...num1){
    return num1;
}


console.log(calculateTotalPrice(200,300,300));


const product={
    name : "book",
    price: 200
}

function handleProduct(anyobject){
    console.log(`Name of product is ${product.name} and its price is ${product.price}`);
    
}

handleProduct(product);
