function solution(s) {
    var answer = '';
    const len = s.length;
    
    const cal = Math.round((len / 2));
    
    len % 2 == 0 ? answer += s[cal-1] + s[cal] : answer += s[cal-1]
    
    return answer;
    
}