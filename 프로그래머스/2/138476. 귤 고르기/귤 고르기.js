function solution(k, tangerine) {
    let answer = 0;
    
    tangerine.sort((a, b) => b - a);
    
    const count = tangerine.reduce((acc, curr) => { 
      acc[curr] = (acc[curr] || 0) + 1; 
      return acc;
    }, {});
    
    const result = Object.values(count).sort((a, b) => b - a)
    
    let sum = 0;
    
    for(let i = 0; i < result.length; i++) {
        sum += result[i];
        answer++;
        if(sum >= k) return answer;
    }
}