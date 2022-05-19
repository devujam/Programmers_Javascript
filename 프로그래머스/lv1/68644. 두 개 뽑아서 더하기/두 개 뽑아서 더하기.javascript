function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let k = 0; k < numbers.length; k++) {
            if(i != k) {
                answer.push(numbers[i] + numbers[k]);
            }
        }
    }
    
    const set = new Set(answer);
    const arr = [...set];
    
    arr.sort((a, b) => {
        return a-b
    })
    
    return arr;
}