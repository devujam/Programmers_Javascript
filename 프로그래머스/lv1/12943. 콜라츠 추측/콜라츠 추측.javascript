function solution(num) {
    var answer = 0;
    
    for(let i = 0; i < 500; i++) {

        if(num === 1) {
            return i;
        } else {
            num = num % 2 == 0 ? num / 2 : num * 3 + 1
        }
    }
    
    return -1;
}