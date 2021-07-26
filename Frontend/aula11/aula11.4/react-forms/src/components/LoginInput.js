import React, { Component } from 'react'

class LoginInput extends Component {
  // create a function which validate an email
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(email) ? '' : 'Invalid email'
  }

  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label htmlFor='login'>
            Email
            <input
              placeholder='Insert your login'
              type='text' 
              name='login' 
              value={ value } 
              id='login' 
              onChange={ onChange } />
          </label>
        <span className='form-error'>{ this.validateEmail(value) }</span>
      </div>
    )
  }
}

export default LoginInput