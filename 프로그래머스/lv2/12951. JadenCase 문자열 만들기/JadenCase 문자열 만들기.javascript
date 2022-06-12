function solution(s) {
    s = s.toLowerCase()
    
    let answer = s.split(" ").map(s => {
        let str = s.split("")
        if(str[0] != null)
           str[0] = str[0].toUpperCase();
        return str.join("");
    }).join(" ");

    return answer;
}
