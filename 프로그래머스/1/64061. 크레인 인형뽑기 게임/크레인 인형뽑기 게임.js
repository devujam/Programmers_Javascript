function solution(board, moves) {
    let answer = 0;
    const stack = [];
    
    for(let i = 0; i < moves.length; i++) {
        const movesNumber = moves[i] - 1; 
        
        for(let j = 0; j < board.length; j++) {
            if( board[j][movesNumber] === 0 ) continue;
            
            const lastStack = stack.length > 1 ? stack.length - 1 : 0;
                
            if(stack[lastStack] === board[j][movesNumber]){
                board[j][movesNumber] = 0;

                stack.pop();
                answer += 2;
            }
            else {
                stack.push(board[j][movesNumber]);
                board[j][movesNumber] = 0;
            }
            break;
        }
    }
    
    return answer;
}