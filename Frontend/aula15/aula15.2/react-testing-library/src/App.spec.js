import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import App from './App'

it('should change the values of inputs and test the stored value', () => {
  const { getByTestId } = render(<App />)
  const nameInput = getByTestId('input-nome')
  expect(nameInput).toHaveValue('')
  fireEvent.change(nameInput, { target: { value: 'Fulano' } })
  expect(nameInput).toHaveValue('Fulano')

  const emailInput = getByTestId('input-email')
  expect(emailInput).toHaveValue('')
  fireEvent.change(emailInput, { target: { value: 'fulano@fulano.com' } })
  expect(emailInput).toHaveValue('fulano@fulano.com')
});