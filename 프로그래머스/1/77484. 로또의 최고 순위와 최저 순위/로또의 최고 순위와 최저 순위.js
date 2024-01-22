function solution(lottos, win_nums) {
    let maxRankCount = 0;
    let zeroCount = 0;
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    for(let i = 0; i < 6; i++) {
        for(let k = 0; k < 6; k++) {
            if(lottos[i] === 0) {
                zeroCount++;
                maxRankCount++;
                break;
            }
            if(lottos[i] === win_nums[k]) maxRankCount++;
        }
    }
    
    return [rank[maxRankCount], rank[maxRankCount - zeroCount]];
}