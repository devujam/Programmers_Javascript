function getPlayerObject(players) {
    const playerObject = {};
    
    for (let i = 0; i < players.length; i++) {
        playerObject[players[i]] = i;
    }
    
    return playerObject;
}

function getPlayers(callings, players, playerObject) {
    for (let i = 0; i < callings.length; i++) {
        const index = playerObject[callings[i]];
        const temp = players[index - 1];
      
        // 현재 index와 이전 index의 값을 교환
        players[index - 1] = callings[i];
        players[index] = temp;
      
        // Object index도 업데이트
        playerObject[callings[i]] = index - 1;
        playerObject[temp] = index;
    }
    
    return players;
}

function solution(players, callings) {
    return getPlayers(callings, players, getPlayerObject(players));
}

