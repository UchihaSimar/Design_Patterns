class Car {
    constructor(){
        this.name = 'Car';
        this.wheels = 4;
    }
}

class Truck {
    constructor(){
        this.name = 'Truck';
        this.wheels = 18;
    }
}

class Motorcycle{
    constructor(){
        this.name = "Motorcycle";
        this.wheels = 2
    }
}

class VehicleFactory {
    constructor(type){
        switch(type){
            case 'car':
                return new Car();
            case 'truck':
                return new Truck();
            case 'motorcycle':
                return new Motorcycle();
            default:
                return null
        }
    }
}

const car = new VehicleFactory('car');
console.log(car.wheels);
const truck = new VehicleFactory('truck');
console.log(truck.wheels);
const motorcycle = new VehicleFactory('motorcycle');
console.log(motorcycle.wheels);