function solution(s) {
    let transformCount = 0;
    let deleteZeroCount = 0;
    
    while(s !== '1') {
        s = s.split('').filter((v) => {
            if(v > 0) {
                return v;
            }
            deleteZeroCount++;
        }).join('');   
        
        const len = s.length;
        
        s = len.toString(2);
        
        transformCount++;
    }

    
    return [transformCount, deleteZeroCount];
}