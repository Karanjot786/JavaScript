// let js = "Karanjot";
// // if (js === "Karanjot" ) alert("This is my fist alert in JavaScript");
// console.log(45-54-43/43*45);


// // Values and Variables
// console.log("Karanjot Singh");
// console.log(19);
// let firstName = "Karanjot";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// // Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// // Data Types

// let name1 = "Karanjot Singh"; // string
// let age = 19; //number
// let a = true; // boolean
// console.log(typeof name1);
// console.log(typeof a);
// console.log(typeof age);


// // let, const and var

// var b  =1;
// let c = 2;
// const d = 3;

// Strings and Template Literals

// const firstName = "Karanjot Singh";
// const birthYear = 2003;
// const year = 2023
// const job = "student";

// // Strings
// const karanjot = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(karanjot);

// // Template Literals
// const karanjotNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(karanjotNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// Taking Decisions: if / else Statements

// const age = 19;
// if (age >= 18 ) {
//     console.log('Karanjot can start driving license 🚗');
// }
// else{
//     const yearsLeft = 18 - age;
//     console.log(`Karanjot is too young. Wait another ${yearsLeft} years`);
// }



////////////////////////////////////
// Type Conversion and Coercion

// // Type Conversion
//  const inputType = "2003";
//  console.log(inputType);
//  console.log(Number(inputType), inputType);
//  console.log(Number(inputType) + 20);
//  console.log(Number("Karanjot"));
//  console.log(String(18) , 4);
  
// // type Coercion
// console.log('I am ' + 20 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1;
// n = n - 1;
// console.log(n);

////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN


////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': 
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

////////////////////////////////////
// The Conditional (Ternary) Operator

const age = 19;
age>=18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');
const drink = age >= 18 ? 'I like to drink wine 🍷' : 'I like to drink water 💧';
console.log(drink);
console.log(`I like to drink ${age>=18 ? "wine 🍷" : "water 💧"}  `);