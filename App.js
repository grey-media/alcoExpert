import React from 'react';
import { YellowBox } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import MainNavigarion from './src/config/routes';
import reduser from './src/redusers';

YellowBox.ignoreWarnings(['Setting a timer']);

const store = createStore(reduser);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigarion />
      </Provider>
    );
  }
}
