function solution(cards1, cards2, goal) {

    for(const g of goal) {
        if(cards1[0] === g) {
            cards1.shift();
            continue;
        } 
        if(cards2[0] === g) {
            cards2.shift();
            continue;
        } 
        
        return 'No'
    }

    return 'Yes';
}