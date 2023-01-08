function solution(food) {
    let answer = '';
    
    for(let i = 0; i < food.length; i++) {
        const foodRow = food[i].toString();
        const index = i.toString();
        if(Number(foodRow) > 1) {
            if(foodRow % 2 === 0) {
                answer += index.repeat(Number(foodRow) / 2);
            } else {
                answer += index.repeat((Number(foodRow) - 1) / 2);
            }
        }
    }
    const reverse = answer.split('').reverse().join('');
    
    return answer + '0' + reverse;
}