const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let sum = 0;
const num = input[0];
const score = input[1].split(" ");

const max = Math.max(...score);

for (let i = 0; i < num; i++) {
    sum += score[i] / max * 100;
}

console.log(sum / num);