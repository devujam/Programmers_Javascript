function solution(maps) {
    const yLen = maps.length;
    const xLen = maps[0].length;
    const move = [[-1, 0],[1, 0],[0, -1],[0, 1]]; // 상하좌우
    
    const bfs = () => {
        const queue = [[0, 0, 1]]; // 행, 열, 이동거리
        
        while(queue.length > 0) {
            const [curY, curX, distance] = queue.shift();

            // 도착시 값 리턴
            if(curX === xLen - 1 && curY === yLen - 1) return distance;
            
            // 상하좌우 이동
            for(const [y, x] of move) {
                const newY = curY + y;
                const newX = curX + x;
                
                // 새로운 위치가 맵 내에 있고 벽이 아닐 경우 이동
                if(newY >= 0 && newY < yLen && newX >= 0 && newX < xLen && maps[newY][newX] > 0) {
                    queue.push([newY, newX, distance + 1]);
                    maps[newY][newX] = 0;
                }
            }
        }
        return -1
    }
    
    return bfs();
}