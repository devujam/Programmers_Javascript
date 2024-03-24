const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const n = input;
let dp = [0];
dp[1] = 1;
dp[2] = 1;

let count = 0;

for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
    count++;
}

console.log([dp[n], count].join(' '));