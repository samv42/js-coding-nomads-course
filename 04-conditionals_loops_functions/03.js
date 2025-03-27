function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */
// let i = 5;
//  while(i <= 1000) {
//      console.log(i);
//      i = i + 5
//  }
// let p = -100;
// while(p <=100) {
//     console.log(p);
//     p++;
// }
// let plusOrMinus = true
// let e = 0
// while(e <= 5000) {
//     if(plusOrMinus == true){
//         e = e + 3;
//         plusOrMinus = false;
//     }else{
//         e = e - 1;
//         plusOrMinus = true;
//     }
//     console.log(e);
//     e++;
// }
// let r = 13;
// while(r % 11 != 0) {
//     r = getRandomNumber;
//     console.log(r);
// }
// console.log("The random number " + r + " is divisible by 11.")