function solution(keymap, targets) {
    const answer = [];

    for(let i = 0; i < targets.length; i++) {
        const target = targets[i];
        let count = 0;
        for(let j = 0; j < target.length; j++) {
            const targetString = target[j];
            
            const arr = keymap.map((v) =>  {
                const index = v.indexOf(targetString);
                return index === -1 ? Infinity : index + 1;
            })
            
            const min = Math.min(...arr);
            
            if(min === Infinity) {
                count = -1;
                break;
            }
            
            count += min;
        }
        answer.push(count);
    }
    
    return answer;
}