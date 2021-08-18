import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";

export const About = () => <h1>Você está na página Sobre</h1>;
export const Home = () => <h1>Você está na página Início</h1>;
export const NoMatch = () => <h1>Página não encontrada</h1>;

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">Início</Link>
        <br />
        <Link to="/about">Sobre</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}
