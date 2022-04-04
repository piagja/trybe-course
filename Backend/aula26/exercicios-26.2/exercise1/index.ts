import CarColors from './carColor'
import Directions from './directions'
import CarDoors from './doors'

interface Car {
  brand: string
  color: CarColors
  doors: number
}

class Car {
  constructor (brand: string, color: CarColors, doors: number) {
    this.brand = brand
    this.color = color
    this.doors = doors
  }

  honk (): string {
    return `*HONK* *HONK*`
  }

  openTheDoor (door: CarDoors): string {
    const message = `Abrindo a porta ${door}`
    return message
  }

  closeTheDoor (door: CarDoors): string {
    const message = `Fechando a porta ${door}`
    return message
  }
}

const car = new Car('Ford', CarColors.Black, 4)
console.log(car.honk())
