const maxHeal = 100;
function Fighter(objectFighter){
    return {
        getName: objectFighter.name,
        getDamage: objectFighter.damage,
        getStrength: objectFighter.strength,
        getAgility: objectFighter.agility,
        getHealth: objectFighter.hp,
        win: 0,
        loss: 0,

        attack: function(defender){
            let random = Math.random() * maxHeal;
            if(random > parseInt(defender.getStrength) + parseInt(defender.getAgility)){
                defender.dealDamage(parseInt(this.getDamage));
                console.log(this.getName + ' makes ' + this.getDamage + ' demage ' + defender.getName);
            }else {
                console.log(defender.getName + ' attack missed');
            }
        },

        heal: function(health){
            this.getHealth + health>maxHeal ? this.getHealth = maxHeal : this.getHealth += health;
        },

        logCombatHistory: function(){
            console.log('Name: '+ this.getName+', Wins: ' + this.win + ', Losses: ' + this.loss);
        },

        dealDamage: function(damageFighter){
            this.getHealth-damageFighter > 0 ? this.getHealth -= damageFighter : this.getHealth = 0;
        },
        
        addWin: function(){
            this.win += 1;
        },

        addLoss: function(){
            this.loss += 1;
        }
    }
}

function battle(fighter1, fighter2){
    if(Number(fighter1.getHealth) === 0){
        console.log(fighter1.getName + ' is deed ang can not fight');
    }else if(Number(fighter2.getHealth) === 0){
        console.log(fighter2.getName + ' is deed ang can not fight');
    }else{
        while(fighter1.getHealth > 0 && fighter2.getHealth > 0){
            fighter1.attack(fighter2);
            fighter1 = [fighter2, fighter2 = fighter1][0];
        }
        if(Number(fighter1.getHealth) === 0){
            fighter1 = [fighter2, fighter2 = fighter1][0];
        }
        console.log(fighter1.getName + ' has won!');
        fighter1.addWin();
        fighter2.addLoss();
    }  
}