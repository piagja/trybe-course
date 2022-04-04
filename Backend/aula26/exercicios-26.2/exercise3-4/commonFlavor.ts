import Pizza from './pizza'
import { CommonFlavor } from './newsFlavors'

interface CommonFlavorPizza extends Pizza {
  flavor: CommonFlavor
}

export default CommonFlavorPizza
