function solution(people, limit) {
    var answer = 0;
    let len = people.length - 1;
    people.sort((a, b) => b - a)
    
    for(var i = 0; i <= len; i++){
        if(people[i] + people[len] <= limit) len--
        answer++
    }
        
    return answer;
}