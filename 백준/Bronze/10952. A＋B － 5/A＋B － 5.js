const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length - 1; i++) {
    let num = input[i].split(' ').map(x => x * 1);;
    
    console.log(num[0] + num[1]);
}