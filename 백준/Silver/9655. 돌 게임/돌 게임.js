const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

return input[0] % 2 === 0 ? console.log('CY') : console.log('SK');
