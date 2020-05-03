function positiveSum(){
    let sumNumber = 0;
    for(let i = 0; i<arguments.length; i++){
        if(arguments[i]>0){  
            sumNumber += arguments[i];
        }
    }
    return sumNumber;
}

console.log(positiveSum(2,9,5,3,8));
console.log(positiveSum(5,-6,-12,6));