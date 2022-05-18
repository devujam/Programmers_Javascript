function solution(s) {
    var answer = '';
    
    let sSplit = s.split(' ');
    
    for(let i = 0; i < sSplit.length; i++) {
        for(let k = 0; k < sSplit[i].length; k++) {
            if(k % 2 == 0) {
                answer += sSplit[i][k].toUpperCase();
            } else {
                answer += sSplit[i][k].toLowerCase();
            }
        }
        if(i == sSplit.length - 1) {
            return answer
        }
        answer += ' ';
    }
    
}