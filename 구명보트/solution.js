function solution(people, limit) {
    const stack = 2; //최대 제한
    people.sort((a,b) => b - a);
    let count = 0;

    for(let i=0, j = people.length - 1; i<=j ; i++) {
        if(people[i] + people[j] <= limit) j--;
        count++;
    }
    
    return count;

}