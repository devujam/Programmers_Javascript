function solution(answers) {
    let answer = [];
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0, 0, 0];
  
    for(let i = 0; i < answers.length; i++){
        if(first[i % first.length] === answers[i]) count[0]++;
        if(second[i % second.length] === answers[i]) count[1]++;
        if(third[i % third.length] === answers[i]) count[2]++;
    }

    let max = Math.max(...count);
        for(let k = 0; k < count.length; k++){
            if(count[k] === max){
                answer.push(k + 1);
            }
    }
    return answer;
}