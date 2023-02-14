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

// const karan = {
//     firstName: 'Karanjot',
//     lastName: 'Singh',
//     age: 2023 - 2003,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(karan);
// console.log(karan.firstName);
// console.log(karan.lastName);
// console.log(karan['firstName']);

// const nameKey = 'Name';
// console.log(karan['first' + nameKey]);
// console.log(karan['last ' + nameKey]);

// const interested = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends");
// if(karan[interested]){
//     console.log(karan[interested]);

// }

///////////////////////////////////////
// Object Methods
// const karan = {
//     firstName: 'Karanjot',
//     lastName: 'Singh',
//     birthYear: 2003,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear){
//     //     return 2023 - birthYear;
//     // }

//     // calcAge: function(){
//     //     console.log(this);
//     //     return 2023 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function () {
//         return `${this.firstName} ${this.lastName} is a ${this.calcAge()}-year old, and he Birth Year is ${this.birthYear} and he ${this.friends.length} friends and he is best friend is ${this.friends[0]} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
//     }
// };
// // console.log(karan.calcAge(2003));
// console.log(karan.calcAge());
// // karan.calcAge();
// console.log(karan.age);
// console.log(karan.getSummary());


///////////////////////////////////////
// Iteration: The for Loop


// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
// const types = []
// const karan = [
//     'karanjot',
//     'singh',
//     2037 - 2003,
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = 0; i < karan.length; i++) {
//     console.log( karan[i],typeof karan[1]);
//     // Filling types array
//     // types[i] = typeof karan[i];
//     types.push(typeof karan[i]);
// }

// console.log(types);

// const years = [1992,1993,1995,1997,2003];
// const ages = [];

// for (let j = 0; j < years.length; j++) {
//     const element = years[j];
//     ages.push(2023-years[j]);
// }
// console.log(ages);

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < karan.length; i++) {
//     if(typeof karan[i] !== 'string') continue;
//     console.log( karan[i],typeof karan[1]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < karan.length; i++) {
//     if(typeof karan[i] === 'number') break;
//     console.log( karan[i],typeof karan[1]);
// }


///////////////////////////////////////
// Looping Backwards and Loops in Loops

// for (let i = karan.length - 1; i >= 0; i--) {
//     console.log(i, karan[i]);
// }



// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------- Starting exercise ${exercise} --------`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise} Lifting weights repetition ${rep}`);
//     }
// }

///////////////////////////////////////
// The while Loop
// let rep =1;
// while (rep <=10) {
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6)+1;

// while(dice !==6){
//     console.log(`You rolled a ${dice}` );
//     dice = Math.trunc(Math.random() * 6)+1;
//     if(dice === 6)console.log('Loop is about to end...');
// }