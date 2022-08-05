function solution(a, b) {
    let answer = [];
    
    for(let i = 0; i < a.length; i++) {
        let arr = a[i];
        answer.push([]);
        for(let j = 0; j < b[0].length; j++) {
            let sum = 0;
            for(let k = 0; k < b.length; k++) {
                sum += arr[k] * b[k][j];
            }
            answer[i].push(sum);
        }
    }
    
    return answer;
}