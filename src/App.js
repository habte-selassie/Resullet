import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import AppSupa from './AppSupa'
import { ResumePage } from './screens';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ResumePage />
      </Provider>
      

        // <AppSupa />

        
    );
  }
};

export default App;