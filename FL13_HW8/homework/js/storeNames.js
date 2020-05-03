function storeNames(){
    var arrayStrong = new Array();
    for(let i = 0; i<arguments.length; i++){
        arrayStrong[i] = arguments[i];
    }
    return arrayStrong;
}
console.log(storeNames('Rom', 'Whiskey', 'Wine', 'Beer'));