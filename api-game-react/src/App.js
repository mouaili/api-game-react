import React, { Component } from 'react';
import './App.css';
import Goku from './components/Goku';
import Vegeta from './components/Vegeta';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vegeta: 100,
      goku: 100,
    };
  }

  reduceLifeActor = (params, power) => {
    console.log(params, power);
    if (params === 'Vegeta') {
      this.setState(prevState => {
        return {
          goku: prevState.goku - power,
        };
      });
    } else {
      this.setState(prevState => {
        return {
          vegeta: prevState.vegeta - power,
        };
      });
    }
  };

  render() {
    return (
      <div className='container text-center'>
        <h1>Goku Vs Vegeta</h1>
        <hr />
        <div className='row'>
          <Vegeta
            name='Vegeta'
            life={this.state.vegeta}
            handleReduceLife={this.reduceLifeActor}
          />
          <Goku
            name='Goku'
            life={this.state.goku}
            handleReduceLife={this.reduceLifeActor}
          />
        </div>
      </div>
    );
  }
}

export default App;
