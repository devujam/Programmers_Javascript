function solution(number, limit, power) {
    const numberList = new Array(number + 1).fill(0);
    
    for(let i = 1; i <= number; i++) {
        for(let j = i; j <= number; j += i) {
            numberList[j] += 1;
        }
    }

    return numberList.reduce((acc, cur) => { return cur > limit ? acc + power : acc + cur });
}