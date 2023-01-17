function solution(babbling) {
    const arr = ['aya','ye','woo','ma'];
    let answer = 0;
    for(let i = 0; i < babbling.length; i++) {
        let str = babbling[i];
        for(let j = 0; j < arr.length; j++) {
            if(babbling[i].includes(arr[j].repeat(2))) break;
            if(babbling[i].includes(arr[j])) {
                babbling[i] = babbling[i].replace(arr[j], ' ');
                j--
            }
        }
        if(babbling[i].split(' ').join('').length === 0) answer++
    }
    return answer;
}