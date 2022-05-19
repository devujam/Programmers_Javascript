function solution(a, b) {
    let answer = '';
    let totalDay = 0;
    const day = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const month = [31,29,31,30,31,30,31,31,30,31,30,31];
    
    for(let i = 0; i < a-1; i++) {
        totalDay += month[i];
    }
    
    totalDay += b + 4;
    
    return day[totalDay % 7]
}