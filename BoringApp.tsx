import React from 'react';
import {StyleSheet} from 'react-native';
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
import CloudProjects from './screens/CloudProjects';

const stack = createStackNavigator();
const BoringApp = () => {
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
        <stack.Screen
          name="Cloud"
          component={CloudProjects}
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
const styles = StyleSheet.create({});

export default BoringApp;
