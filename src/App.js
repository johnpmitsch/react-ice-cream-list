import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import flavors from './redux/reducers/FlavorListReducers.js';
import IceCreamApp from './components/IceCreamApp';
import './App.css';

// combining our reducers to pass into the store
const rootReducer = combineReducers({
  flavors
});

class App extends Component {
  render() {
    // the provider makes the store (created below) avaiable to all child components within
    // it. We then can use the store to map global state to props.
    return (
      <Provider store={createStore(rootReducer)}>
        <IceCreamApp />
      </Provider>
    )
  }
}

export default App;
