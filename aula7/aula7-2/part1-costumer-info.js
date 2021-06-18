const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const { name, phoneNumber, order: { delivery: { deliveryPerson }}, address: { street, number, apartment }} = order;
  const message = `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${street}, Nº: ${number}, AP: ${apartment}`

  return message;
}

console.log(customerInfo(order))


const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.

}

orderModifier(order);