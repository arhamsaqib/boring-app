import React from 'react';
import Main from './screens/Main';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProjectDetails from './screens/ProjectDetails';
import NewPoint from './screens/NewPoint';
import AllBoringPoints from './screens/AllBoringPoints';
import PointDetailsTabs from './screens/PointDetailsTabs';
import NewSample from './screens/NewSample';
import Lithology from './screens/Lithology';
import Remarks from './screens/Remarks';
//import {useStore} from 'react-redux';

const stack = createStackNavigator();
const BoringApp = () => {
  //const store = useStore();
  //console.log(store, 'storeValue');
  //store.dispatch({type: 'PointID', payload: 'kuxh'});
  //  store.dispatch({type: 'something', payload: 'kuCh'});
  //console.log(store.getState(), 'state');
  // const store = useContext(ReactReduxContext);
  //props.store.subscribe(() => console.log(props.store.getState()));
  //console.log(store);
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <stack.Screen
          name="Project Details"
          component={ProjectDetails}
          options={{
            headerStyle: {backgroundColor: '#1a4572'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <stack.Screen
          name="BoringPoints"
          component={AllBoringPoints}
          options={{
            headerStyle: {backgroundColor: '#1a4572'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <stack.Screen
          name="New Point"
          component={NewPoint}
          options={{
            headerStyle: {backgroundColor: '#1a4572'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <stack.Screen
          name="PointDetailsTabs"
          component={PointDetailsTabs}
          options={{
            headerStyle: {backgroundColor: '#1a4572'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <stack.Screen
          name="New Sample"
          component={NewSample}
          options={{
            headerStyle: {backgroundColor: '#1a4572'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <stack.Screen
          name="New Lithology"
          component={Lithology}
          options={{
            headerStyle: {backgroundColor: '#1a4572'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <stack.Screen
          name="New Remarks"
          component={Remarks}
          options={{
            headerStyle: {backgroundColor: '#1a4572'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default BoringApp;
