import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const Config = {
      apiKey: 'api-key',
      authDomain: 'project-id.firebaseapp.com',
      databaseURL: 'https://project-id.firebaseio.com',
      projectId: 'project-id',
      storageBucket: 'project-id.appspot.com',
      messagingSenderId: 'sender-id',
      appID: 'app-id',
};
    firebase.initializeApp(Config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}

export default App;
