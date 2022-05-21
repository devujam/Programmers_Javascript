function solution(arr, divisor) {
    var answer = [];
    
    let arrSort = arr.sort((a,b) => {
        return a-b;
    })
    
    for(let i = 0; i < arrSort.length; i++) {
        if(arrSort[i] % divisor === 0) answer.push(arrSort[i])
    }
    
    return answer.length ? answer : [-1];
}