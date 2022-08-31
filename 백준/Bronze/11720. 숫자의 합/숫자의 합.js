const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const length = Number(input[0]);
const num = input[1].split("");
let result = 0;

for (let i = 0; i < length; i++) {
    result += Number(num[i]);
}

console.log(result);