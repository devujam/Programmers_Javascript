function solution(record) {
  const answer = [];
  const userInfo = {};

  for (let i = 0; i < record.length; i++) {
    const [command, uid, name] = record[i].split(" ");
    
    if (command === "Enter") {
      userInfo[uid] = name;
      answer.push(`${uid}님이 들어왔습니다.`);
    } else if (command === "Leave") {
      answer.push(`${uid}님이 나갔습니다.`);
    } else if (command === "Change") {
      userInfo[uid] = name;
    }
  }

  return answer.map((ele, idx) => {
    const [uid] = answer[idx].split("님이");
    return answer[idx].replace(uid, userInfo[uid]);
  })
}