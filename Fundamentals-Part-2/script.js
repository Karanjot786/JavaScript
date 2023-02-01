'use strict';
///////////////////////////////////////
// Functions

// function logger() {
//     console.log('My name is Karanjot Singh');
//   }

//   // calling / running / invoking function
// logger();
// logger();
// logger();

// // function fruitProcessor(apples, oranges) {
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //   return juice;
// // }
// // const applesJuice =fruitProcessor(5,0)
// // console.log(applesJuice);
// // const applesOrangesJuice =fruitProcessor(5,8)
// // console.log(applesOrangesJuice);

// ///////////////////////////////////////
// // Function Declarations vs. Expressions

// // Function Declarations
// function calcAge1(birtYear){
//   return 2023 - birtYear;
// }
// const age1 = calcAge1(2003)


// // Function expression
// const calcAge2 = function (birtYear){
//   return 2023 - birtYear;
// }

// const age2 = calcAge2(2003);
// console.log(age1,age2);

// ///////////////////////////////////////
// // Arrow functions
// const calcAge3 = birtYear => 2023 - birtYear;
// const age3 = calcAge3(2003);
// console.log(age3);

// const yearsUntilRetirement = (birtYear , firstName) => {
//   const age = 2023 - birtYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;

// }
// console.log(yearsUntilRetirement(2003, "Karanjot Singh"));

// ///////////////////////////////////////
// // Functions Calling Other Functions
// function cutFruitProcessor(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitProcessor(apples);
//   const orangePieces = cutFruitProcessor(oranges);
//   // const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

///////////////////////////////////////
// Introduction to Arrays

// const friends = ["Karan",'jot','singh','array'];
// console.log(friends);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length );
// console.log(friends[friends.length - 1]);
// friends[2] ='juice';
// console.log(friends);
// // friends =['ksjn','ks'];
// // console.log(friends);
// const firstName = "Jonas";
// const jonas = [firstName,'Dulay', 2023-2003,friends]
// console.log(jonas);

// const calcAge = function (birtYear){
//   return 2023 - birtYear;
// }

// const years = [1993,1995,1997,2003];

// const age = calcAge(years[0])
// const age1 = calcAge(years[1])
// const age2 = calcAge(years[2])
// const age3 = calcAge(years[years.length - 1]);
// console.log(age,age1,age2,age3);
// const ages = [calcAge(years[0]), calcAge(years[1]),calcAge(years[2]), calcAge(years[years.length - 1])];
// console.log(ages);

///////////////////////////////////////
// Basic Array Operations (Methods)
// const friends = ["Karan",'jot','singh','array'];
// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }

///////////////////////////////////////
// Introduction to Objects and Dot vs. Bracket Notation

const karan = {
    firstName: 'Karanjot',
    lastName: 'Singh',
    age: 2023 - 2003,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(karan);
console.log(karan.firstName);
console.log(karan.lastName);
console.log(karan['firstName']);

const nameKey = 'Name';
console.log(karan['first' + nameKey]);
console.log(karan['last ' + nameKey]);

// const interested = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");
// if(karan[interested]){
//     console.log(karan[interested]);

// }