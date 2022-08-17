let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
    let num = input[i].split(' ');
    
    console.log(Number(num[0]) + Number(num[1]));
}