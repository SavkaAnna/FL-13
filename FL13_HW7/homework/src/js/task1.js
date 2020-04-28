let login = prompt('Enter login:','');
let date = new Date().getHours();
let min_length = 4;
let morning = 8;
let evening = 20;
if(!login){
    alert('Canceld');
} else if(login.length<min_length){
    alert('I do not know any users having name length less than 4 symbols');
} else if(login === 'User' || login === 'Admin'){
    let password = prompt('Enter password', '');
    if(!password){ 
        alert('Canceld');
    } else if(login === 'User' && password === 'UserPass'){
        if(date < evening && date > morning){
            alert('Good day, dear User!');
        } else{
            alert('Good evening, dear User!');
        }
    }else if(login === 'Admin' && password === 'AdminPass'){
        if(date < evening && date > morning){ 
            alert('Good day, dear Admin!');
        } else{ 
            alert('Good evening, dear Admin!');
        }
    } else{ 
        alert('Wrong password');
    }
} else{
    alert('I don’t know you');
}
