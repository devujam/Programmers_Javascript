function solution(ingredient) {
    let answer = 0;
    const hamburger = '1231';
    for(let i = 0; i < ingredient.length; i++) {
        if(ingredient.slice(i, i + 4).join('') === hamburger) {
            ingredient.splice(i, 4);
            answer++;
            i -= 3;
        }
    }
    return answer;
}