const fs = require('fs');

const input = require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);
const T = input.shift();

const dp = [0];

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= Math.max(...input); i++) {
    dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

input.forEach((v) => {
    console.log(dp[v]);
});