const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = +input.shift();

for(let i = 0; i < T; i++) {
    const k = +input.shift();
    const n = +input.shift();
    
    let house = Array.from(Array(k + 1), () => Array(n).fill(0));
    
    for(let x = 0; x < n; x++) {
        house[0][x] = x + 1;
    }

    for(let j = 1; j <= k; j++) {
        for(let z = 0; z < n; z++) {
            house[j][z] = house[j - 1][z] + house[j][z === 0 ? z : z - 1];
        }
    }

    console.log(house[k][n - 1]);
}

