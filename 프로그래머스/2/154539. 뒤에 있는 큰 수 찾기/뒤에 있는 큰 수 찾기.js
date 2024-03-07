function solution(numbers) {
    var answer = [];
    var stack = [];

    while (numbers.length) {
        if(!stack.length) {            
            answer.push(-1);
            stack.push(numbers.pop());
        } else {
            if(stack.at(-1) > numbers.at(-1)) {
                answer.push(stack.at(-1));                   
                stack.push(numbers.pop());
            } else {
                stack.pop();
            }
        }
    }
 
    return answer.reverse();
}