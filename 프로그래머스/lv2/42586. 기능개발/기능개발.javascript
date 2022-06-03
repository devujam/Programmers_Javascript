function solution(progresses, speeds) {
    var answer = [];
    let days = 1;
    let count = 0;
    
    for(let i = 0; i < progresses.length; i++) {
        
        while(progresses[i] + days * speeds[i] < 100) {
            days++;
        }

        if(progresses[i] + days * speeds[i] >= 100) {
            if(progresses[i+1] + days * speeds[i+1] >= 100) {
                count++
            } else {
                count++
                answer.push(count);
                count = 0
            }
        }
    }
    
    return answer;
}