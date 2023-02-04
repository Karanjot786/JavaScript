///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a,b,c) => (a+b+c)/3;
// const teamDolphins = calcAverage(85, 54 ,41);
// const teamKoalas = calcAverage(23, 34 ,27);
// console.log(teamDolphins,teamKoalas);

// const checkWinner = function(avgDolhins,avgKoalas){
//     if (avgDolhins >= 2 * avgKoalas) {
//         console.log(`The winner is Dolhins and score is ${avgDolhins}`);
//     }else if(avgKoalas >= 2 * avgDolhins){
//         console.log(`The winner is Koalas and score is ${avgKoalas}`);
//     }else{
//         console.log("no team wins!");
//     }
// }

// console.log(checkWinner(teamDolphins,teamKoalas));


///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/


// const bills = [125,555,44];
// const calcTip = function (bill) {
//     return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.20;
// }
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0],bills[1] + tips[1],bills[2] + tips[2]]
// console.log(bills, tips, totals);
// console.log(`The bill is ${bills[0]}, tip is ${tips[0]} and total bill is ${bills[0] + tips[0]} `);
// console.log(`The bill is ${bills[1]}, tip is ${tips[1]} and total bill is ${bills[1] + tips[1]} `);
// console.log(`The bill is ${bills[2]}, tip is ${tips[2]} and total bill is ${bills[2] + tips[2]} `);


///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const marksWeights = 78;
// const marksHeight = 1.69;
// const johnWeights = 92;
// const johnHeight = 1.95;

// const markBMI = marksWeights / marksHeight ** 2;
// const johnBMI = johnWeights / (johnHeight * johnHeight)

// const markHigherBMI = markBMI > johnBMI;
// console.log("This is Mark BMI",markBMI,"This is John BMI", johnBMI, "The BMI is Marks greater than John", markHigherBMI);

// const mark = {
//     fullName: "Mark Miller",
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }


// const john = {
//     fullName: "John Smith",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);
// // John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!
// if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
    
// }