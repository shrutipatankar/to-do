import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './Todos';

class App extends Component {
  state = [{
    "id": "1",
    "value": "Pick up Laundry"
  },
  {
    "id": "2",
    "value": "Call grandma"
  },
  {
    "id": "3",
    "value": "Go swimming"
  }
  ];

  render() {
    return (
      <div className="todoapp">
        <header className="header">
          <h1>
            To-Do List
          </h1>
        </header>
        <Todos />
      </div>
    );
  }
}

export default App;
