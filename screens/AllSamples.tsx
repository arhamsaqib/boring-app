import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const AllSamples = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <Button
        title="New Sample"
        onPress={() => navigation.push('New Sample')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  mainCont: {
    marginTop: 10,
    marginLeft: '1%',
    marginRight: '1%',
  },
});
export default AllSamples;
