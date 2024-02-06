function solution(priorities, location) {
    let answer = 0;
    let maxPriority = Math.max(...priorities);

    let arr = priorities.map((v, i) => i);

    while(priorities.length > 0){
         maxPriority = Math.max(...priorities);
        
        if(priorities[0] < maxPriority){
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        } else {
            answer += 1;
            priorities.shift();
            if(arr.shift() === location) return answer;
        }
    }
}