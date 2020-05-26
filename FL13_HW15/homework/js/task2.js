function Vehicle(color, engine){
    this.color = color;
    this.engine = engine;
    this.maxSpeed = 70;
    this.isStop = true;
    this.isDrive = true;
    this.name = 'Vehicle';
    this.maxSpeedInDrive = 0;
}
function Car(color, engine, model){
    Vehicle.call(this, color, engine);
    this.model = model;
    this.maxSpeed = 80;
    this.name = 'Car';
}
function Motorcycle(color, engine, model){
    Vehicle.call(this, color, engine);
    this.model = model;
    this.maxSpeed = 90;
    this.name = 'Motorcycle';
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Vehicle;

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Vehicle;

Vehicle.prototype.upgradeEngine = function(newEngine, newMaxSpeed){
    if(this.isStop){
        this.engine = newEngine;
        this.maxSpeed = newMaxSpeed;
    }
};

Vehicle.prototype.getInfo = function(){
    return {
        engine: this.engine,
        color: this.color,
        maxSpeed: this.maxSpeed,
        model: this.model
    }
};

Vehicle.prototype.drive = function(){
    let time = 2000;
    let setIntervals;
    let driving = () => {
        if(this.isStop){
            clearInterval(setIntervals);
        }else {
            if(this.maxSpeedInDrive > this.maxSpeed){
                console.log('speed is too high, SLOW DOWN!');
            }
            this.maxSpeedInDrive += 20;
            console.log(this.maxSpeedInDrive);
        }
    }
    if(this.isStop){
        this.isStop = false;
        setIntervals = setInterval(driving, time)
    } else {
        console.log('Already driving');
    }
}

Vehicle.prototype.stop = function(){
    let time = 1500;
    let setIntervals;
    let stopping = () => {
        if(!this.isStop){
            clearInterval(setIntervals);
        } else {
            if(this.maxSpeedInDrive === 0){
                clearInterval(setIntervals);
                this.itIsStop();
            } else {
                this.maxSpeedInDrive -= 20;
                console.log(this.maxSpeedInDrive);
            }
        } 
    }
    if(!this.isStop){
        this.isStop = true;
        setIntervals = setInterval(stopping, time);
    } else {
        console.log('Already slows down');
    }
}

Vehicle.prototype.itIsStop = function(){
    console.log(`Vehicle is stopped. Maximum speed during the drive was ${this.maxSpeedInDrive}`);
}

Car.prototype.changeColor = function(newColor){
    if(newColor === this.color){
        console.log('The selected color is the same as the previous, please choose another one');
    } else {
        this.color = newColor;
    }
}

Car.prototype.itIsStop = function(){
    console.log(`Car ${this.model} is stopped. Maximum speed during the drive ${this.maxSpeedInDrive}`);
}

Motorcycle.prototype.drive = function(){
    let speedBorder = 30;
    let time = 2000;
    let setIntervals;
    let driving = () => {
        if(this.isStop){
            clearInterval(setIntervals);
        } else if(this.maxSpeedInDrive - this.maxSpeed >= speedBorder){
            console.log('Engine overheating');
            clearInterval(setIntervals);
            this.stop();
        } else {
            if(this.maxSpeedInDrive > this.maxSpeed){
                console.log('speed is too high, SLOW DOWN!');
            }
            this.maxSpeedInDrive += 20;
            console.log(this.maxSpeedInDrive);
        }
    }
    if(this.isStop){
        this.isStop = false;
        console.log('Let’s drive');
        setIntervals = setInterval(driving, time)
    } else {
        console.log('Already driving');
    }
}

Motorcycle.prototype.itIsStop = function(){
    console.log(`Motorcycle ${this.model} is stopped. Good drive`);
}