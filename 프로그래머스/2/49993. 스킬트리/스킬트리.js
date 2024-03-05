function solution(skill, skill_trees) {
    const skills = skill.split('');

    let count = 0;
    let str = '';
    
    for(const skillTree of skill_trees) {
        str = skillTree.split('').filter(e => skills.includes(e)).join('');
        
        if(str === skill.substring(0, str.length)) count++;
    }
    
    return count;
}