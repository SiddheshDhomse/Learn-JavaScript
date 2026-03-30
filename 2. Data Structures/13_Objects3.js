//Destructuring Array

const course = {
    courseName : "JavaScript",
    price: 999,
    IsComplete: false,
}

const {courseName : subject} =course;

console.log(subject);
