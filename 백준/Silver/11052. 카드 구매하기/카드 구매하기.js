const [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const prices = input.split(' ').map(v => +v);

let dp = new Array(+N + 1).fill(0);

for(let i = 1; i <= N; i++) {
    for(let j = 1; j <= i; j++) {
        dp[i] = Math.max(dp[i], dp[i - j] + prices[j - 1]);
    }
}

console.log(dp[N]);