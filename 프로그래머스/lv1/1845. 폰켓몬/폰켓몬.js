function solution(nums) {
    let answer = 0;
    
    const count = nums.length / 2;
    const setArr = new Set(nums);
    const arr = [...setArr]
    const arrLength = arr.length;
    
    return count > arrLength ? arrLength : count
}