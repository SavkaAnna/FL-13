if(confirm('Do you want to play a game?')){
    let max_number = 6;
    let attempts = 3;
    let total_prize = 0;
    let prize = 100;
    let result = false;

    do{
        let number = Math.floor(Math.random() * Math.floor(max_number));
        let change_prize = prize;
        for(attempts; attempts>0; attempts--){
            let user_number = prompt('Choose a roulette pocker number from 0 to ' + String(max_number-1) +
                                '\nAttempts left: ' + attempts +
                                '\nTotal prize: ' + total_prize + '$' +
                                '\nPossible prize on current attempt: ' + change_prize + '$');
            if(Number(user_number) === number){
                total_prize += change_prize ;
                alert('Congratulation, you won! \nYour prize is:' + change_prize+ '$.');
                result = confirm('Do you want to continue?');
                if(result){
                    max_number += 5;
                    prize *= 2;
                } 
                break;   
            } else{
                change_prize /= 2;
                result = false;
            }
        }
        if(!result){
            alert('Thank you for your participation. \nYour prize is:' + total_prize + '$.');
            result = confirm('Do you want to play again?');
            prize = 100;
            total_prize = 0;
            max_number = 6;
            attempts = 3;
        }
    }while(result);
} else{ 
    alert('You did not become a billionaire, but can.');
}
