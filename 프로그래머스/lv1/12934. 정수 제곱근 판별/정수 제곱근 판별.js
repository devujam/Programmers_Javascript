function solution(n) {
    let sqrt = Math.sqrt(n);

    if (sqrt % 1 === 0) return Math.pow(sqrt+1,2); // 제곱근일 경우
    else return -1;
    
}