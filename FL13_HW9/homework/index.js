function convert(){
    let convertArray = new Array();
    for(let i = 0; i<arguments.length; i++){
        typeof arguments[i] === 'number' ? convertArray[i] = String(arguments[i]) : 
        convertArray[i] = Number(arguments[i]);
    }
    return convertArray;
}

function executeforEach(array, func){
   for(let i = 0; i<array.length; i++){
        func(array[i]);
    }
}

function mapArray(array, func){
    let newArray = new Array();
    executeforEach(array, function(element){
        newArray.push(func(parseInt(element)));
    });
    return newArray;
}

function filterArray(array, func){
    let newArray = new Array();
    executeforEach(array, function(element){
        if(func(element)){
            newArray.push(element);
        }
    });
    return newArray;
}

function containsValue(array, numberCheck){
    let result = false;
    executeforEach(array, function(el){
        console.log(el);
        if(Number(el) === Number(numberCheck)){
            result = true;
        }
    })
    return result;
}

function flipOver(string){
    let stringArray = '';
    for(let i = string.length-1; i >= 0; i--){
        stringArray += string[i];
    }
    console.log(stringArray);
}

function makeListFromRange(array){
    let arrayList = new Array();
    for(let i = 0; i<array[1]-1; i++){
        arrayList.push(array[0]+i);
    }
    console.log(arrayList);
}

function getArrayOfKeys(arrayObjects, key){
    let arrayResult = new Array();
    executeforEach(arrayObjects, function(el){
        arrayResult.push(el[key]);
    })
    return arrayResult;
}

function substitute(arrayNumbers){
    let newArray = new Array();
    let top = 20, buttom = 10;
    mapArray(arrayNumbers, function(element){
        if(element>buttom&& element<top){
            element = '*';
        }
        newArray.push(element);
    })
    return newArray;
}

function getPastDay(day, dayBefore){
    let newDate = day;
    newDate.setDate(day.getDate() - dayBefore);
    return newDate.getDate()+', ( ' + newDate.getDate()+ ' ' + newDate.getMonth() + ' '+ 
        newDate.getFullYear() + ' )';
}

function formatDate(date){
    let stringDate = [date.getFullYear(), Number(date.getMonth()+1), date.getDate(), 
        date.getHours(), date.getMinutes()];
    for(let i = 0; i<stringDate.length; i++){
        if(stringDate[i]<10){
            stringDate[i] = '0' + stringDate[i];
        }
    }
    return stringDate[0] + '/' + stringDate[1] + '/' + stringDate[2] + 
        ' ' + stringDate[3] + ':' + stringDate[4];
}