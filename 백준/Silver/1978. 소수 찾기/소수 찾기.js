const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const num = Number(input[0]);
const arr = input[1].split(" ").map((el) => Number(el));
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    continue;
  } else {
    let count = 0;
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        count++;
      }
    }
    if (count === 0) {
      answer++;
    }
  }
}
console.log(answer);