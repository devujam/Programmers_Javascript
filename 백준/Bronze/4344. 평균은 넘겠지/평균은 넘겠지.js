const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const num = Number(input[0]);


for(let i = 1; i <= num; i++){
    let sum = 0;
    let count = 0;
    
    score = input[i].split(' ').map(Number);
    const n = score[0];
    
    for(let j = 1; j <= n; j++){
        sum += score[j];
    }
    const avg = sum / n;
    for(let k = 1; k <= n; k++){
       if(score[k] > avg){
           count++;
       }
   }
    console.log(((count/n)*100).toFixed(3)+"%");
}