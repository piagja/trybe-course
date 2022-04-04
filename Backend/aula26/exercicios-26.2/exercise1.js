var CarColor;
(function (CarColor) {
    CarColor[CarColor["Black"] = 0] = "Black";
    CarColor[CarColor["White"] = 1] = "White";
    CarColor[CarColor["Red"] = 2] = "Red";
    CarColor[CarColor["Silver"] = 3] = "Silver";
})(CarColor || (CarColor = {}));
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    brand;
    color;
    doors;
    honk() {
        return `*HONK* *HONK*`;
    }
}
const car = new Car('Ford', CarColor.Black, 4);
console.log(car.honk());
