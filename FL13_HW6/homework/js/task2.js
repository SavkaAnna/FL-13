let str = prompt('Enter a word','');
if(!str || str.replace(/\s/g,'')===''){
    alert('Wrong!');
} else {
    let length = str.length;
    if(length%2 === 0){
        alert('"'+str[length/2-1] + str[length/2]+'"');
    } else {
        alert('"'+str[(length-1)/2]+'"');
    }
}
