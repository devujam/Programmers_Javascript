function solution(s){
    let lower = s.toLowerCase();
    
    let pLength = lower.split("p").length;
    let yLength = lower.split("y").length;
    
    return pLength === yLength ? true : false;
}