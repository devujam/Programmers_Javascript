const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) {
    let num = input[i].split(' ');
    
    let num1 = Number(num[0]);
    let num2 = Number(num[1]);
    
    console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}