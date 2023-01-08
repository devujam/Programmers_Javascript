function solution(food) {
    let answer = '';
    const arr = [];
    
    for(let i = 0; i < food.length; i++) {
        const foodRow = food[i].toString();
        arr.push(food[i]);
        const arrIndex = (arr.length - 1).toString();
        if(Number(foodRow) > 1) {
            if(foodRow % 2 === 0) {
                answer += arrIndex.repeat(Number(foodRow) / 2);
            } else {
                answer += arrIndex.repeat((Number(foodRow) - 1) / 2);
            }
        }
    }
    const reverse = answer.split('').reverse().join('');
    
    return answer + '0' + reverse;
}