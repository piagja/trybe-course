import Pizza from './pizza'
import { SweetFlavor } from './newsFlavors'

interface SweetFlavorPizza extends Pizza {
  flavor: SweetFlavor
  slices: 4
}

export default SweetFlavorPizza
