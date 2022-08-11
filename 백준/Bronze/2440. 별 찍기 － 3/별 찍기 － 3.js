let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

for (let i = Number(input); i > 0; i--) {
	console.log("*".repeat(i));
}