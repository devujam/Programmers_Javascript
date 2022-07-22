function solution(s) {
    let answer = "";
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const arr = s.split('');
    let temp = "";
            
    for(let i = 0; i < arr.length; i++) {
        if(Number(arr[i]) || Number(arr[i]) === 0) {
            answer += Number(arr[i]);
        } else {
            temp += arr[i];
            if(numbers.indexOf(temp) > -1) {
                answer += Number(numbers.indexOf(temp))
                temp = "";
            }
        }
    }
    return Number(answer);
}