import React from 'react'
import { render } from '@testing-library/react';
import App from './App';

test('verifica que, quando recebo uma piada, mostro ela na tela', async () => {
  const joke = {
    id: "AIm3w5hiyd",
    joke: "Why did the tree go to the dentist? It needed a root canal.",
    status: 200
  }

  const response = { json: jest.fn().mockResolvedValue(joke) }

  global.fetch = jest.fn().mockResolvedValue(response)

  const { findByText } = render(<App />);
  await findByText(joke.joke);
});
