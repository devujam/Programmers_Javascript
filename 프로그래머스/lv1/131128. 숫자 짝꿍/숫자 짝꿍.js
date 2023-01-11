function solution(X, Y) {
    let answer = '';
    X = X.split('');
    Y = Y.split('');
    
    for(let i = 0; i < 10; i ++) {
        const countX = X.filter(ele => +ele === i).length
        const countY = Y.filter(ele => +ele === i).length
        answer += String(i).repeat(Math.min(countX, countY))
    }
    
    if(!answer) return '-1';
    if(+answer === 0) return '0';
    
    return answer.split('').sort((a,b) => b - a).join('');
}