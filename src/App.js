import React from 'react';
import { createStore } from 'redux'; 
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// this is our initial state
const defaultState = {
  welcome: 'Hi',
  otherState: []
};
/* 
* this is the reducer that takes the action and current state and returns a new state object 
* based on the action dispatched by dispatcher. We pass initial state to it.
*/
const greeting = (state = defaultState, action) => {
 
  switch(action.type) {
    case 'GREET_ME': 
      return {...state, welcome: `Hello ${action.name}`};
    case 'GREET_WORLD': 
      return {...state, welcome: 'Hello World'};
    default: 
      return state;
  }
}
// This is our store created using the reducer function
const store = createStore(greeting);

// getting our state before dispatching an action
console.log(store.getState());

const name = 'Hridayesh';

// this is the dispatcher that takes and object with action type in it
store.dispatch({
  type: 'GREET_ME',
  name
})

console.log(store.getState());

