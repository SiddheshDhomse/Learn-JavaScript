
let a =100;

if(true){
    let a = 10;
    console.log(a);
    
    const b = 20;
    var c = 30;      //var has global scope
}

console.log(a);
//console.log(b);
console.log(c); 


function one(){
    const name = "siddhesh";
    
    function two(){
        let functionname = "two";
        console.log(name);
        
    }
    //console.log(functionname);
    
    two();
}

one();
