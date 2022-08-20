const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const num = Number(input);
let result = '';

for (let i = 0; i < num; i++) {
    let str = '';
    str += ' '.repeat(i);
    
    for (let j = num - i; j > num - i - 1; j--) {
        str += '*'.repeat(j);
        result += str + '\n';
    }
}

console.log(result);