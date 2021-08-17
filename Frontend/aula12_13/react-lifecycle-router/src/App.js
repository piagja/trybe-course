import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from './Profile'
import HowTo from './HowTo'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Route path='/about' component={About} />
        <Route path='/howto' component={HowTo} />
        <Route path='/profile/:ship' render={(props) => <Profile {...props} name="Barbaruiva, o bucaneiro da rede" />} />
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    )
  }
}
