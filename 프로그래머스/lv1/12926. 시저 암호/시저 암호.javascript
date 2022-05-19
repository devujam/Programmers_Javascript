function solution(s, n) {
    let answer = '';
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    
    for(let i = 0; i < s.length; i++) {
        
        if(s[i] == ' ') {
            answer += ' '; 
            continue;
        }
        
        let textInclude = upper.includes(s[i]) ? upper : lower;
        let index = textInclude.indexOf(s[i])+n;
        
        if(index > 25) {
            index -= 26;
            answer += textInclude[index]
        } else {
            answer += textInclude[index]
        }
    }
    
    return answer;
}