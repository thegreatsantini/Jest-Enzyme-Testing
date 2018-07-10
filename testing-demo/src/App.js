import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
        this.state = {
            counter: 0
        }
    }

  render() {
    return (
      <div data-test='component-app' className="App">
        <p data-test='counter-display'>Click the button to TDD: {this.state.counter}</p>
        <button
          data-test='increment-button'
          onClick={ () => this.setState ({ counter: this.state.counter + 1 } )}
        >
        Dont mind me while I TDD
        </button>
        <button
          data-test='decrement-button'
          onClick={ () => this.setState( { counter: this.state.counter - 1 } ) }
        >
        TDD Me, please
        </button>
      </div>
    );
  }
}

export default App;
