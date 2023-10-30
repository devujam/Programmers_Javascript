function solution(phoneNumber) {
    let answer = '';
    for(let i = 0; i < phoneNumber.length; i++) {
        if((phoneNumber.length) - 4 > i) {
            answer += '*'
        } else {
            answer += phoneNumber[i]
        }
    }
    return answer;
}