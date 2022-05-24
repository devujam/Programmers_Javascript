function solution(A,B){
    var answer = 0;
    let ASort = A.sort((a, b) => {
        return a - b;
    })
    
    let BSort = B.sort((a, b) => {
        return b - a;
    })
    
    for(let i = 0; i < A.length; i++) {
        answer += (ASort[i] * BSort[i])
    }

    return answer;
}