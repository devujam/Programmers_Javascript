function solution(want, number, discount) {
    let answer = 0;

    if(discount.length < 10) return answer;
    
    for(let i = 0; i < discount.length; i++) {
        const saleProducts = discount.slice(i, i + 10);
        
        let count = 0;
        for(let j = 0; j < want.length; j++) {
            const len = saleProducts.filter(e => e === want[j]).length
            if(len >= number[j]) count++;
            else break;
        }
        
        if(count === want.length) answer++
    }
    
    return answer;
}