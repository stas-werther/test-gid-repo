let n = +prompt('Enter a number') || 0;
let amount = +prompt('Amount of number') || 0;



/**
 * Will log numbers that could be devided by first argument
 * @param {number} number Number to devide
 * @param {number} amountOfNumbers Amount of numbers should be shown
 */



const calc = function(number, amountOfNumbers ) {
     for (let i = 0; i < amountOfNumbers; i++) {
         console.log( (i + 1) * number);
    }
};

/**
 * 
 * @param {number} a First operand
 * @param {number} b Second operand
 */

const sum = function(a, b) {
    return a + b;
}

const resultOfSUm = sum(n, amount);
console.log(resultOfSUm);