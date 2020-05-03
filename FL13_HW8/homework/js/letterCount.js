function letterCount(string, stringSeach){
    let count = 0;
    for(let i = 0; i<string.length; i++){
        if(string[i] === stringSeach){
            count += 1;
        }
    }
    return count;
}

console.log(letterCount('filter', 'a'));
console.log(letterCount('bigger','g'));