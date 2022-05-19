function solution(s) {    
    let arr = s.split('')
    let sort = arr.sort();
    let reverse = sort.reverse();
    
    let answer = reverse.join('');
    
    return answer;
}