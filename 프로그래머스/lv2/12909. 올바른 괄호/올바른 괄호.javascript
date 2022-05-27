function solution(s){
    var answer = true;
    let count = 0;
    let LPLength = s.split('(').length;
    let RPLength = s.split(')').length;
    
    if(LPLength !== RPLength) return false

    if(s[0] === ")") return false

    if(s[s.length - 1] === "(") return false

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "(") count++;
        else count--;
        if(count < 0) answer = false;
    }
    
    return answer;
}