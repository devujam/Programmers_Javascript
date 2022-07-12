let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = String(input[0] * input[1] * input[2]);

for (let i = 0; i <= 9; i++) {
    let count = 0;
    
    for (let k = 0; k < num.length; k++) {
        if (Number(num[k]) === i) {
            count++;
        }
    }
    
    console.log(count);
}