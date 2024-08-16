//Fill in the method sum so that it adds up all the positive integers up to number and returns the sum. For example, when given 4 it should return 10 (4+3+2+1).

module.exports = function sum(number) {
    // Handle the case when the number is zero or negative
    if (number <= 0) {
        return 'Invalid input please enter a number greater than 0'; 
    }

    //Base case: if the number is 1 return 1
    if (number === 1) {
        return 1;
    }
    //Recursive case: return number + sum of recursive numbers from (number - 1)
    return number + sum(number - 1);
}

//Test case
console.log(sum(4));
console.log(sum(0));