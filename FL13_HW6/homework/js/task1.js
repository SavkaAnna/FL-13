let check_number = Number(prompt('Enter a check number',''));
let percent = Number(prompt('Enter a tip percentage',''));
let max_percent = 100;
if(check_number + percent >0 && percent>0 && percent<max_percent){
    let tip_amount = check_number*percent/max_percent;
    let total_sum = check_number+tip_amount;
    alert('Check number:  ' + check_number + '\nTip:  ' + percent + '%' + '\nTip amount:  ' + 
        tip_amount + '\nTotal sum to pay:  ' + total_sum);
} else{
    alert('Invalid input data');
}
