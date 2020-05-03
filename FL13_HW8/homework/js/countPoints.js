function isBigger(firstNumber, lastNumber){
    return firstNumber>lastNumber;
}

function countPoints(arrayMatches){
    let countMarks = 0;
    for (let i = 0; i < arrayMatches.length; i++) {
        let resultMatch = arrayMatches[i];
        let ballFirsTeam = Number(resultMatch[0]);
        let ballSecondTeam = Number(resultMatch[resultMatch.length-1]);
        if(isBigger(ballFirsTeam, ballSecondTeam)){
            countMarks += 3;
        }else if(ballFirsTeam === ballSecondTeam){
            countMarks +=1;
        }
    }
    return countMarks;
}

console.log(countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']));
console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']));