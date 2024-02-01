function solution(n) {
    let fibonacci = [1, 1]
  	for (let i = 2; i <= n; i++) {
        fibonacci[i] = (fibonacci[i - 2] + fibonacci[i - 1]) % 1234567;
    }
    
    return fibonacci[n];
}