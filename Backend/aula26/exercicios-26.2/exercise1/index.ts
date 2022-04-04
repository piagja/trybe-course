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

  turnOn (): string {
    return `Ligando o carro`
  }

  turnOff (): string {
    return `Desligando o carro`
  }

  speedUp (speed: number): string {
    const message = `Acelerando o carro para ${speed}`
    return message
  }

  speedDown (speed: number): string {
    const message = `Desacelerando o carro para ${speed}`
    return message
  }
}

const car = new Car('Ford', CarColors.Black, 4)
console.log(car.honk())
