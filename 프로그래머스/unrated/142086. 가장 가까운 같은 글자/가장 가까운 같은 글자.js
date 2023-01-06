function solution(s) {
  const answer = [];
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const index = obj[s[i]];
    if (index === undefined) {
      answer.push(-1);
    } else {
      answer.push(i - index);
    }
    obj[s[i]] = i;
  }
  return answer;
}