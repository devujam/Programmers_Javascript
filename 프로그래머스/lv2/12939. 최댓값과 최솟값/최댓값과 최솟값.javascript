function solution(s) {
    var answer = '';
    
    let len = s.length;
    let sSplit = s.split(' ');
    
    sSplit.sort((a, b) => a-b)
    
    return sSplit[0]+" "+sSplit[sSplit.length-1]
}