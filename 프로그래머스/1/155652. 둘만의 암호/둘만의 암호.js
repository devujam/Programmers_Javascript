function solution(strings, skip, index) {
    let answer = '';
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].filter(v => !skip.includes(v))
    
    for (const s of strings) {
        const indexSum = alphabet.indexOf(s) + index;
        answer += alphabet[indexSum % alphabet.length];
    }
    
    return answer;
}