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

  openTheDoor (door: CarDoors): void {
    const message = `Abrindo a porta ${door}`
    return console.log(message)
  }

  closeTheDoor (door: CarDoors): void {
    const message = `Fechando a porta ${door}`
    return console.log(message)
  }

  turnOn (): void {
    return console.log(`Ligando o carro`)
  }

  turnOff (): void {
    return console.log(`Desligando o carro`)
  }

  speedUp (meters: number): void {
    const message = `Acelerando o carro mais ${meters} metros`
    return console.log(message)
  }

  speedDown (): void {
    const message = `Desacelerando o carro`
    return console.log(message)
  }

  stop (): void {
    return console.log(`Parando o carro`)
  }

  turn (direction: Directions): void {
    const message = `Virando o carro para ${direction}`
    return console.log(message)
  }
}

export default Car
