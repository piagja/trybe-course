import Pizza from './pizza'
import { VegetarianFlavor } from './newsFlavors'

interface VegetarianFlavorPizza extends Pizza {
  flavor: VegetarianFlavor
}

export default VegetarianFlavorPizza
