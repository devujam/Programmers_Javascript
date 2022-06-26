function solution(n, lost, reserve) {
    // 체육복 1개만 가지고 있는 학생 수 = n - lost.length
    var answer = n - lost.length;

    // lost와 reverse에 같은 학생이 중복된다면 lost와 reverse에서 각각 제외
    let lostFilter = lost.filter((l) => !reserve.includes(l));
    let reserveFilter = reserve.filter((r) => !lost.includes(r));
    
    //체육복 1개만 가지고 있는 학생 수 += 위에서 제외된 학생 수 
    answer += lost.length - lostFilter.length;
    
    lostFilter.sort((a, b) => a - b);
    
    lostFilter.forEach((l) => {
        if(reserveFilter.length === 0) return answer;
        if(reserveFilter.includes(l - 1)) {
            reserveFilter = reserveFilter.filter((r) => r !== l - 1);
            answer++;
        } else if(reserveFilter.includes(l + 1)) {
            reserveFilter = reserveFilter.filter((r) => r !== l + 1);
            answer++;
        }
    })
    return answer;
}