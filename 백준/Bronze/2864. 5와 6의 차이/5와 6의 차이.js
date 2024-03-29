const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const [num1, num2] = input;

const min = +num1.replaceAll(6, 5) + +num2.replaceAll(6, 5);
const max = +num1.replaceAll(5, 6) + +num2.replaceAll(5, 6);

console.log(`${min} ${max}`);