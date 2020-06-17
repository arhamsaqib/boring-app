import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const AllRemarks = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <Button
        title="+   NEW REMARK"
        onPress={() => navigation.push('New Remarks')}
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

export default AllRemarks;
