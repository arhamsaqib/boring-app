import React from 'react';
import BoringApp from './BoringApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';
import {combinedReducers} from './reducers';

const store = createStore(combinedReducers);

const App = () => {
  YellowBox.ignoreWarnings(['Require cycle:']);
  YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
  return (
    <Provider store={store}>
      <BoringApp />
    </Provider>
  );
};
export default App;
