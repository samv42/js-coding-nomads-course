/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */
function random() {
    let r = Math.random();
    return r;
}

function mathResults(sum, count, average) {
    this.sum = sum;
    this.count = count;
    this.average = average;
    }

function sumCountAverage(array) {
    let sum = 0;
    let count = 0;
    let average;
    hundred.forEach((number) => {
        sum = sum + number;
        count++;
    });
    
    average = sum / count;
    let results = new mathResults(sum, count, average);
    return results;
}

let hundred = [];
for(i = 0; i<100; i++){
    hundred.push(random());
}

let results1 = sumCountAverage(hundred);

console.log("The sum of the array is " + results1.sum + ", the number of items is "
     + results1.count + ", and the average of the items is " + results1.average);

let halfArray = [];
hundred.forEach((number) => halfArray.push(number / 2));

let results2 = sumCountAverage(halfArray);
console.log("The sum of the half array is " + results2.sum + ", the number of items is " +
     results2.count + ", and the average of the items is " + results2.average);
