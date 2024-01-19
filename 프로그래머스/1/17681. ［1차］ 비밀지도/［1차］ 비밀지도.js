function solution(n, arr1, arr2) {
    let answer = [];

    for(let i = 0; i < n; i++) {
        const binary = (arr1[i] | arr2[i]).toString(2);
        
        let text = '';
        for(let j = binary.length - n; j < binary.length; j++) {
            if(binary[j] == 1) text += '#'
            else text += ' '
        }
        answer.push(text);
    }
    
    return answer;
}