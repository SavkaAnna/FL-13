function isBigger(firstNumber, lastNumber){
    return firstNumber>lastNumber;
}

function getDifference(firstNumber, lastNumber){
    return (isBigger(firstNumber, lastNumber) ? firstNumber-lastNumber : lastNumber-firstNumber);
}

console.log(getDifference(45,123));