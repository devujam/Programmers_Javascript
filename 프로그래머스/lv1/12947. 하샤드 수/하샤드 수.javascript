function solution(x) {
    let total = 0
    let xString = x.toString();
    
    for(let i = 0; i < xString.length; i++) {
        total += Number(xString[i]);
    }
    
    if(x % total == 0) {
        return true
    } else {
        return false
    }
}