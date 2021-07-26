import React, { Component } from 'react'

class PasswordForm extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label htmlFor='password'>
        Password
        <input
          placeholder='Insert your password'
          type='password' 
          name='password' 
          value={ value } 
          id='password' 
          onChange={ onChange } />
      </label>
    )
  }
}

export default PasswordForm
