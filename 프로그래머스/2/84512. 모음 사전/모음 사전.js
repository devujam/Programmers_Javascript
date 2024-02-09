function solution(word) {
    const alphabets = ['A', 'E', 'I', 'O', 'U'];
    const counts = [];
    
    for(let i = 0; i < alphabets.length; i++) {
        if(i === 0) {
            counts.push(1);
            continue;
        }
        counts.push(counts[i - 1] * alphabets.length + 1)
    }
    
    counts.sort((a, b) => b - a);
    
    let answer = 0;
    for (let i = 0; i < word.length; i++) {
        answer += alphabets.indexOf(word[i]) * counts[i] + 1;
    }
    
    
    return answer;
}
