import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import NewPoint from './NewPoint';
import AllSamples from './AllSamples';
import AllLithologies from './AllLithologies';
import AllRemarks from './AllRemarks';
const Tab = createMaterialTopTabNavigator();

const PointDetailsTabs = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Point" component={NewPoint} />
      <Tab.Screen name="Samples" component={AllSamples} />
      <Tab.Screen name="Lithology" component={AllLithologies} />
      <Tab.Screen name="Remarks" component={AllRemarks} />
    </Tab.Navigator>
  );
};

export default PointDetailsTabs;
