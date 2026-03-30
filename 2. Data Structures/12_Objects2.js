const myUser = new Object();

myUser.id = "1221";
myUser.name = "Name";
myUser.IsLogged = true;
console.log(myUser);

const anotherUser = {
    accountEmail : "xyz@gmai.com",
    fullname:{
            username:{
                firstName: "Sid",
                lastName: "Dubey",
            }
    },
}

console.log(anotherUser.fullname.username.firstName);

const obj1 ={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

const obj3 = {...obj1,...obj2};
console.log(obj3);

//const obj4 = Object.assign({}, obj1, obj2);
const obj4 = {};
Object.assign(obj4, obj1, obj2);


console.log(obj4);

const users =[
    {id: 1,
     username: "user1",
     email: "user1@gmail.com"
    },

    {
        id: 2,
        username: "user2",
        email: "user2@gmail.com"
    },

    {
        id: 3,
        username: "user3",
        email: "user3@gmail.com"
    }
]

console.log(users[0]);
console.log(users[0].username);

console.log(Object.keys(users));     
console.log(Object.values(users));
console.log(Object.entries(users));



