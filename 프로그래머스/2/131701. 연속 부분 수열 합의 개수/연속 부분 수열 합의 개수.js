function solution(elements) {
    let answer = 0;
    const arr = [...elements, ...elements];
    
    const result = [];
    
    for(let i = 1; i < elements.length + 1; i++) {
        for(let k = 0; k < arr.length; k++) {
            if(i === 1) {
                result.push(arr[k]);
                continue;
            }
            const sum = arr.slice(k, k + i).reduce((a, b) => a + b);
            result.push(sum);
        }
    }
    const set = new Set(result);
    
    return set.size;
}