interface Vehicle {
    startEngine(): void;
}


class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    
    startEngine(): void {
        console.log(`The ${this.year} ${this.make} ${this.model}'s engine has started.`);
    }
}


const myCar = new Car("Toyota", "Corolla", 2022);
myCar.startEngine();
