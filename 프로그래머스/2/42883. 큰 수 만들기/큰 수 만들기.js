function solution(number, k) {
    const stack = [];
    
    for(const num of number) {
        while(k > 0 && stack.at(-1) < num) {
            stack.pop();
            k--;
        }
        
        stack.push(num);
    }
    
    stack.splice(number.length - k, stack.length)
    
    return stack.join('');
}