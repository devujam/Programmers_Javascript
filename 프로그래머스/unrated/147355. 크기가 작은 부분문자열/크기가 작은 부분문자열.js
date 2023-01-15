function solution(t, p) {
    let answer = 0;
    t = t.split('');
    
    for(let i = 0; i < t.length - (p.length - 1); i++) {
        const str = t.slice(i, p.length + i).join('');
        if(+str <= +p) answer++;
    }
    
    return answer;
}