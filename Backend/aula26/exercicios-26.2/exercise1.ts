interface ICar {
  brand: string
  color: CarColor
  doors: number
}

enum CarColor {
  Black,
  White,
  Red,
  Silver
}

class Car implements ICar {
  constructor(brand: string, color: CarColor, doors: number) {
    this.brand = brand
    this.color = color
    this.doors = doors
  }
  brand: string
  color: CarColor
  doors: number

  honk(): string {
    return `*HONK* *HONK*`
  }
}

const car = new Car('Ford', CarColor.Black, 4);
console.log(car.honk())