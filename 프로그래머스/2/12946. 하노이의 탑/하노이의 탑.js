function solution(n) {
    const move = [];
    
    const hanoi = (n, from, by, to) => {
        if(n === 1) {
            move.push([from, to]);
            return;
        }
        
        hanoi(n - 1, from, to, by);
        move.push([from, to])
        hanoi(n - 1, by, from, to);
    }
    
    hanoi(n, 1, 2, 3);
    
    return move;
}