function solution(cacheSize, cities) {
    const CACHE_HIT = 1;
    const CACHE_MISS = 5;
    
    if(cacheSize === 0) return CACHE_MISS * cities.length;
    
    let answer = 0;
    const cacheList = [];
    
    for(const city of cities) {
        const cityUpperCase = city.toUpperCase();
        const index = cacheList.indexOf(cityUpperCase);
        
        if(index === -1) {
            if(cacheList.length >= cacheSize) cacheList.shift();
                
            answer += CACHE_MISS;
        } else {
            cacheList.splice(index, 1);
            answer += CACHE_HIT;
        }
        
        cacheList.push(cityUpperCase)
    }
    
    return answer;
}