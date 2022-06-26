function solution(n, lost, reserve) {
    var answer = n - lost.length;

    let lostFilter = lost.filter((l) => !reserve.includes(l));
    let reserveFilter = reserve.filter((r) => !lost.includes(r));
    
    answer += lost.length - lostFilter.length;
    
    lostFilter.sort((a, b) => a - b);
    
    lostFilter.forEach((l) => {
        if(reserveFilter.includes(l-1)){
            reserveFilter = reserveFilter.filter((r)=>r!==l-1);
            answer++;
        }
        else if(reserveFilter.includes(l+1)){
            reserveFilter = reserveFilter.filter((r)=>r!==l+1);
            answer++;
        }
    })
    return answer;
}