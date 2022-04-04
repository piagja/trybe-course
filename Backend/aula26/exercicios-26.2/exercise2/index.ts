import Car from '../exercise1/index'
import CarColors from '../exercise1/carColor'
import CarDoors from '../exercise1/doors'
import Directions from '../exercise1/directions'

const gol = new Car('Gol', CarColors.Silver, 4)

// tem que entar no carro, abrir e fechar a porta
gol.openTheDoor(CarDoors.DRIVER)
gol.closeTheDoor(CarDoors.DRIVER)

// tem que ligar o carro
gol.turnOn()

// começa a acelerar avançando 600m
gol.speedUp(600)

// ai vira a esquerda e avança mais 200m
gol.turn(Directions.LEFT)
gol.speedUp(200)

// manter a frente mais 1.2km
gol.speedUp(1200)

// agora mais 300m e vire a direita
gol.speedUp(300)
gol.turn(Directions.RIGHT)

// agora mais 400m para chegar ao destino e parar  ocarro
gol.speedUp(400)
gol.stop()

// abrir a porta de trás do passageiro
gol.openTheDoor(CarDoors.BEHIND_PASSENGER)

// fechar a porta de trás do passageiro
gol.closeTheDoor(CarDoors.BEHIND_PASSENGER)

// como o carro NÃO DESLIGOU e SÓ PAROU, basta avançar para o
// destino do passageiro, 300m a frente e virar a direita
gol.speedUp(300)
gol.turn(Directions.RIGHT)

// manter pelos proximos 2km
gol.speedUp(2000)

// mais 200m virar a esquerda
gol.speedUp(200)
gol.turn(Directions.LEFT)

// mais 400m e virar a direita
gol.speedUp(400)
gol.turn(Directions.RIGHT)

// mais 100m para chegar ao destino
gol.speedUp(100)

// chegamos ao destino, parar o carro
// abrir porta de tras do passageiro
gol.stop()
gol.openTheDoor(CarDoors.BEHIND_PASSENGER)
gol.closeTheDoor(CarDoors.BEHIND_PASSENGER)
