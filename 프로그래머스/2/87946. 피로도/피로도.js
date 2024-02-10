function solution(k, dungeons) {
    let answer = 0;
    const length = dungeons.length;
    const visited = Array(length).fill(false);
    let temp = 0;

    const dfs = (fatigue, conut) => {
        for(let i = 0; i < length; i++) {
            if(!visited[i] && fatigue >= dungeons[i][0]) {
                visited[i] = true;
                dfs(fatigue - dungeons[i][1], conut + 1);
                visited[i] = false;
            }
        }
        answer = Math.max(answer, conut);
    }
    
    dfs(k, 0);

    return answer;
}