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

  speedUp (meters: number): string {
    const message = `Acelerando o carro para ${meters} metros`
    return message
  }

  speedDown (): string {
    const message = `Desacelerando o carro`
    return message
  }

  stop (): string {
    return `Parando o carro`
  }

  turn (direction: Directions): string {
    const message = `Virando o carro para ${direction}`
    return message
  }
}

export default Car
