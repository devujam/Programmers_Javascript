function solution(board)
{
    let answer = 0;
    let row = board.length;
    let col = board[0].length;
    
    if(col < 2) return 1;
    
    for(let i = 1; i < row; i++) {
        for(let k = 1; k < col; k++) {
            if(board[i][k] === 1) {
                let min = Math.min(
                    board[i-1][k-1], 
                    board[i-1][k], 
                    board[i][k-1]
                );
                board[i][k] = min + 1;
            }
            if(answer < board[i][k]) answer = board[i][k];
        }
    }
    return answer * answer;
}