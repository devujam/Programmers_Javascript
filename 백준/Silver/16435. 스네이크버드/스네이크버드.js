const [nums, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [N, L] = nums.split(' ').map(n => parseInt(n));
const heights = input.split(' ').sort((a, b) => a - b);

for (const height of heights) {
  if (L >= height) L++;
  else break;
}

console.log(L);