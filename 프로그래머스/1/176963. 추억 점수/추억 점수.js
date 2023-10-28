function solution(name, yearning, photo) {
    let answer = [];
    
    for (let i = 0; i < photo.length; i++) {
        let score = 0;
        for(let j = 0; j < photo[i].length; j++) {
            for(let k = 0; k < name.length; k++) {
                if(name[k] === photo[i][j]) {
                    score += yearning[k];
                }
            }
        }
        answer.push(score);
    }
        
    return answer;
}