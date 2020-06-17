import React from 'react';
import BoringApp from './BoringApp';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {YellowBox} from 'react-native';
import ProjectDetailsReducers from './reducers/ProjectDetailsReducers';

const func = () => {};
const store = createStore(func);

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
