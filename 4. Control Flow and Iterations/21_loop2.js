const book = [
    { title: 'Book One' , author: 'Sid' , published: 2021, gener: 'fiction'},
    { title: 'Book Two' , author: 'Babul' , published: 2022, gener: 'non-fiction'},
    { title: 'Book Three' , author: 'Amogh' , published: 2023, gener: 'fiction'},
    { title: 'Book Four' , author: 'Sid' , published: 2011, gener: 'fiction'},
    { title: 'Book Five' , author: 'Babul' , published: 2019, gener: 'non-fiction'},
    { title: 'Book Six' , author: 'Amogh' , published: 2013, gener: 'fiction'}, 
];


const userBooks = book.filter( (bk) => bk.gener === "fiction");

    //console.log(userBooks);

const oldBook = book.filter((it) => it.published <= 2020);
//console.log(oldBook);

const amoghBook = book.filter((itr) => itr.author === "Amogh");
//console.log(amoghBook);

const numsArr = [1,2,3,4,5,6,7,8,9,10];

numsArr.map( (mp) => {mp + 10} );
console.log(numsArr);

const newArr = numsArr.map((it) =>it+10);
console.log(newArr);


