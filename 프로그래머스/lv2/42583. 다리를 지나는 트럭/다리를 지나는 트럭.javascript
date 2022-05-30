function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let sum = 0;
    let queue = [];
    
    for(let i = 0; i < bridge_length; i++) {
        queue.push(0);
    }
    
    while(queue.length > 0){
        answer++;
        sum -= queue.shift();
        
        if(truck_weights.length > 0){
            if(sum + truck_weights[0] <= weight){
                let now_truck = truck_weights.shift();
                sum += now_truck;
                queue.push(now_truck);
            }
            else{
                queue.push(0);
            }
        }
    }
    return answer;
}