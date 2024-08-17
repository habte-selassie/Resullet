import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import AppSupa from './AppSupa'
import { ResumePage } from './screens';
import { Provider } from 'react-redux';
import store from './store/store';
import './App.css';
//import AppSupa from './AppSupa'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ResumePage />
      </Provider>       
    );
  }
};

export default App;