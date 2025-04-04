/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */
//Excercise 1-3
// let dresser = ["shirts", "underwear", "pants", "shorts", "formal"];
// let bookshelf = ["fiction", "history", "comics", "yearbooks", "classic literature"];
// let room = ["desk", "bed", "notebook", dresser, bookshelf];


// for(let i = 0; i<dresser.length; i++) {
//     console.log(room[3][i]);
// } 

//Excercise 4-5
// let numbers = [];
// for(let i = 1; i<=100; i++) {
//     numbers.push(i);
// }
// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
// }
// console.log(sum);

//Excercise 6-8
function getSum(numArray){
    sum = 0;
    for(let i = 0; i < numArray.length; i++) {
        sum = sum + numArray[i];
    }
    return sum;
}
function getRandomNumber(){
    return Math.floor((Math.random() * 10) + 1);
}
let randomNums = [];
let evenNums = [];
let oddNums = [];
for(let i = 0; i <100; i++) {
randomNums.push(getRandomNumber());
}

for(let i = 0; i < randomNums.length; i++) {
    if(randomNums[i] % 2 == 0) {
        evenNums.push(randomNums[i]);
        //console.log("Even: " + randomNums[i]);
    }else{
        oddNums.push(randomNums[i]);
        //console.log("Odd: " + randomNums[i]);
    }
}
let evenSum = getSum(evenNums);
let oddSum = getSum(oddNums);
console.log("Sum of even numbers: " + evenSum);
console.log("Sum of odd numbers: " + oddSum);
