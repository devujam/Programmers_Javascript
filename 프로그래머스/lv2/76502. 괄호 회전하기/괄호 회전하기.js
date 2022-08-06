function solution(s) {
    const len = s.length;
    if (len % 2 === 1) return 0;
    let count = 0;

    for (let i = 0; i < len; i++) {
        let str = s.slice(i) + s.slice(0, i);
        const arr = [];
        let flag = 1;
        for (let value of str) {
            if (value === "(" || value === "[" || value === "{") arr.push(value);
            else {
                const pop = arr.pop();
                if (value === ")" && pop === "(") continue;
                if (value === "]" && pop === "[") continue;
                if (value === "}" && pop === "{") continue;
                flag = 0;
                break;
            }
        }
        if (!!flag) count++;
    }
    return count;
}