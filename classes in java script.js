class Car{
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }
    turborOn() {
        console.log("Turbo is On!")
    }
}
const Car1 = new Car("red,120");
Car1.turborOn();