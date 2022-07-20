function solution(nums) {
    let answer = 0;
    
    const max = nums.length / 2;
    const setArr = new Set(nums);
    const arr = [...setArr]
    const arrLength = arr.length;
    
    return max > arrLength ? arrLength : max
}