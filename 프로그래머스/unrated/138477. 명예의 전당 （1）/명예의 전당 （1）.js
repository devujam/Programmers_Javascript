function solution(k, score) {
    const arr = [];
    const answer = [];
    
    for(let i = 0; i < score.length; i++){
        if(arr.length < k){
            arr.push(score[i]);
            answer.push(Math.min(...arr));
            continue;
        }
        
        if(Math.min(...arr) >= score[i]){
            answer.push(Math.min(...arr));
            continue;
        }
        
        arr.sort((a, b) => b - a);
        arr.pop();
        arr.push(score[i]);
        answer.push(Math.min(...arr));
    }
    
    return answer;
}