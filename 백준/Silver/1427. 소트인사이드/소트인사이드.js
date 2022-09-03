const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let answer = ''

answer = Number(input.toString().split("").sort((a, b) => (b - a)).join(""))
  
console.log(answer)