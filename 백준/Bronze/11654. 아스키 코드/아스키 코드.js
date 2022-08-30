const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const str = input.toString();

console.log(str.charCodeAt(0));