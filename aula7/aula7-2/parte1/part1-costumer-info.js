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
  const message = `Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${street}, Nº: ${number}, AP: ${apartment}`;

  return message;
}

console.log(customerInfo(order))


const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
  order.name = 'Luiz Silva'
  order.payment = 50;
  const { name, payment, order: { pizza: { margherita, pepperoni }, drinks: { coke } } } = order;
  const totalAntes = margherita.price + pepperoni.price + coke.price; // aqui só calcula o total dos valores antes da alteração

  const message = `Olá ${name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${coke.type} é ${payment}.`
  return message;
}

console.log(orderModifier(order))
