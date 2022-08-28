const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let arr = input.map(x => x % 42);

const set = new Set(arr);
arr = [...set];

console.log(arr.length);