function solution(n, words) {
    for(let i = 1; i < words.length; i++) {
        const previousWordArray = words[i - 1].split('');
        const previousWordLastString = previousWordArray[previousWordArray.length - 1];
        const currentWord = words[i];
        const currentWordFirstString = currentWord.split('')[0];
        
        // 중복인 경우
        if(words.indexOf(currentWord) !== i) {
            return [i % n + 1, Math.floor(i / n) + 1]
        }
                
        //틀린 경우
        if(previousWordLastString !== currentWordFirstString) {
            return [i % n + 1, Math.ceil((i + 1) / n)];
        }
    }

    return [0, 0];
}