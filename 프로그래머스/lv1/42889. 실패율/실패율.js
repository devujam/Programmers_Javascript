function solution(N, stages) {
    let userCount = stages.length;
    const arr = [];
    
    for(let i = 1; i <= N; i++) {
        const count = stages.filter(ele => ele === i).length;
        let failRatio = (count / userCount) || 0;
        userCount -= count;
        arr.push({ stage: i, value: failRatio });
    }

    arr.sort((a, b) => {
        if(b.value > a.value) return 1
        if(b.value === a.value) {
            if(a.stage > b.stage) return 1
            if(a.stage < b.stage) return -1
        }
        return -1
    })
    return arr.map(ele => ele.stage);
}