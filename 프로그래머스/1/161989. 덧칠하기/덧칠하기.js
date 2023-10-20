function solution(n, m, sections) {
    let answer = 0;
    let painted = 0;
    
    for(const section of sections) {
        if(section > painted) {
            answer++;
            painted = section + m - 1;
        }
    }
    
    return answer;
}