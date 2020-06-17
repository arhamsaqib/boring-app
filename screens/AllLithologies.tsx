import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const AllLithologies = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <Button
        title="+   NEW LITHOLOGY"
        onPress={() => navigation.push('New Lithology')}
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
export default AllLithologies;
