function solution(topping) {
    let answer = 0;
    let baseMap = new Map();
    let compareMap = new Map();
    
    for(let i = 0; i < topping.length; i++){
        if(baseMap.has(topping[i])){
            baseMap.set(topping[i], baseMap.get(topping[i]) + 1);  
        } else {
            baseMap.set(topping[i], 1);  
        }
    }

    for(let i = 0; i < topping.length; i++){
        if(baseMap.get(topping[i]) === 1){
            baseMap.delete(topping[i]);
        } else {
            baseMap.set(topping[i], baseMap.get(topping[i]) - 1); 
        }
        
        if(compareMap.has(topping[i])){
            compareMap.set(topping[i], compareMap.get(topping[i]) + 1);  
        } else {
            compareMap.set(topping[i], 1);  
        }

        if(baseMap.size === compareMap.size) answer++;
    }
    
    return answer;
}