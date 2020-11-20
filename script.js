let randomNumber = Math.floor(Math.random() * (100-10) + 10);
let luckyNumber;
do{
    luckyNumber = prompt('Enter some number');
} while (luckyNumber !== null && Number(luckyNumber) !== randomNumber);

console.log('Random number was', randomNumber)

 