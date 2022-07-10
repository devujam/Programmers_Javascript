const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const count = input[0];
const num = input[1].split(' ').map(Number);

num.sort((a, b) => a - b);

console.log(num[0], num[count-1]);