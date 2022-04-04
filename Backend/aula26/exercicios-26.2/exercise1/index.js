"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const carColor_1 = __importDefault(require("./carColor"));
const directions_1 = __importDefault(require("./directions"));
const doors_1 = __importDefault(require("./doors"));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() {
        return `*HONK* *HONK*`;
    }
    openTheDoor(door) {
        const message = `Abrindo a porta ${door}`;
        return message;
    }
    closeTheDoor(door) {
        const message = `Fechando a porta ${door}`;
        return message;
    }
    turnOn() {
        return `Ligando o carro`;
    }
    turnOff() {
        return `Desligando o carro`;
    }
    speedUp(speed) {
        const message = `Acelerando o carro para ${speed}`;
        return message;
    }
    speedDown(speed) {
        const message = `Desacelerando o carro para ${speed}`;
        return message;
    }
    stop() {
        return `Parando o carro`;
    }
    turn(direction) {
        const message = `Virando o carro para ${direction}`;
        return message;
    }
}
const car = new Car('Ford', carColor_1.default.Black, 4);
console.log(car.honk());
console.log(car.openTheDoor(doors_1.default.DRIVER));
console.log(car.closeTheDoor(doors_1.default.DRIVER));
console.log(car.turnOn());
console.log(car.speedUp(100));
console.log(car.turn(directions_1.default.LEFT));
console.log(car.speedDown(50));
console.log(car.stop());
console.log(car.turnOff());
console.log(car.turn(directions_1.default.RIGHT));
console.log(car.speedUp(100));
console.log(car.turn(directions_1.default.LEFT));
console.log(car.speedDown(50));
