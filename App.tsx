import React from 'react';
import BoringApp from './BoringApp';
import {YellowBox} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {allReducers} from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';
import LoadingScreen from './screens/LoadingScreen';
import * as firebase from 'firebase';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
//import admin from 'firebase-admin';

const firebaseConfig = {
  apiKey: 'AIzaSyDIIZjrhfxEpe-dR7FInJB2XArqnKi0W_o',
  authDomain: 'boringapp-292ec.firebaseapp.com',
  databaseURL: 'https://boringapp-292ec.firebaseio.com',
  projectId: 'boringapp-292ec',
  storageBucket: 'boringapp-292ec.appspot.com',
  appId: '1:325054843769:android:8646f86d99c14424e03da8',
};
const rrfConfig = {
  userProfile: 'users',
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};
firebase.initializeApp(firebaseConfig);
//console.log(firebase.database(), 'database object');
// /firebase.database().ref('Projects').set({ProjectNumber: 'XYZ1'});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};

const App = () => {
  YellowBox.ignoreWarnings(['Require cycle:']);
  YellowBox.ignoreWarnings(['Warning: componentWillReceiveProps']);
  YellowBox.ignoreWarnings(['Setting a timer']);
  YellowBox.ignoreWarnings(['AsyncStorage']);
  YellowBox.ignoreWarnings(['perform a React state update']);
  YellowBox.ignoreWarnings(['Failed prop type:']);
  YellowBox.ignoreWarnings(['Possible Unhandled Promise']);
  YellowBox.ignoreWarnings(['DatePickerAndroid']);
  YellowBox.ignoreWarnings(['Encountered two children']);
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <BoringApp />
        </PersistGate>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};
export default App;
