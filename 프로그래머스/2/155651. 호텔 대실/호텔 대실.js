function solution(book_time) {
  let answer = [];
  book_time.sort();

  for(const bookTime of book_time) {
    const [startTime, endTime] = bookTime;
    const startMinute = toMinute(startTime)
    const endMinute = toMinute(endTime) + 10;

    const index = answer.findIndex((v) => v <= startMinute);

    if (index === -1) answer.push(endMinute);
    else answer[index] = endMinute;
  }
    
  return answer.length;
}

function toMinute(time) {
  const [hour, minute] = time.split(":");
  return hour * 60 + +minute;
}