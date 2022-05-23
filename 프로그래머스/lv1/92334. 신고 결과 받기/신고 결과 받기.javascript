function solution(id_list, report, k) {
    const answer = new Array(id_list.length);
    answer.fill(0) 
    const reportList = {} // 신고리스트
    
    
    id_list.map((user)=>{ // 유저리스트
        reportList[user] = []
    })
    
    report.map((user)=>{ //해당유저가 신고한 유저리스트 배열로 푸시
        const [user_id, report_id] = user.split(' ')
        if(!reportList[report_id].includes(user_id)){
            reportList[report_id].push(user_id)
        }        
    })
    
    
    for(const key in reportList){
        if(reportList[key].length >= k){
            reportList[key].map((user)=>{
                answer[id_list.indexOf(user)] += 1
            })
        }
    }
    return answer;
}