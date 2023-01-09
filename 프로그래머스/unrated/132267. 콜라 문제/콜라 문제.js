function solution(a, b, n) {
    let answer = 0;
    let temp = 0;
    
    while(n > 1) {
        const newBottle = ((n + temp) / a) * b;
        if((n + temp) % a === 0) {
            console.log(n)
            answer += Math.floor(newBottle);
            n = (n / a) + Math.floor(newBottle);
        } else {
            console.log(n)
            answer += Math.floor(newBottle);
            temp = (n + temp) % a
            n = (n / a) + Math.floor(newBottle);
        }
    }
    
    
    return answer;
}