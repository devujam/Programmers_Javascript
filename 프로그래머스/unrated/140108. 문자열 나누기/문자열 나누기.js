function solution(s) {
    let arr = [];
    let count = 0;
    
    for(let i = 0; i < s.length; i++){
        arr.push(s[i]);
        
        const same = arr.filter((ele) => ele === arr[0]);
        const notSame = arr.filter((ele) => ele !== arr[0]);
        
        if(same.length === notSame.length){
            count++;
            arr = [];
        }
    }
    
    if(arr.length !== 0){
        count++;
    }
    
    return count;
}