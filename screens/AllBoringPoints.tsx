import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
const HeaderLeft = (props) => {
  return (
    <View style={styles.headerElements}>
      <TouchableOpacity onPress={() => console.log('Copy Icon')}>
        <Icon
          name="layers"
          type="simple-line-icons"
          style={styles.iconStyle}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.push('New Point')}>
        <Text style={styles.elem1}>+</Text>
      </TouchableOpacity>
    </View>
    //Header Component End
  );
};

const AllBoringPoints = ({navigation}) => {
  navigation.setOptions({
    headerRight: () => <HeaderLeft navigation={navigation} />,
  });

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.push('PointDetailsTabs')}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>B-01</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Pressed')}>
        <View style={styles.viewStyle}>
          <Text style={styles.textStyle}>B-02</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerElements: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    height: 20,
    width: 30,
  },
  elem1: {
    fontSize: 20,
    color: 'white',
    marginLeft: 15,
    marginRight: 15,
  },
  viewStyle: {
    height: 100,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    margin: 3,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 15,
    marginLeft: 15,
  },
});
export default AllBoringPoints;
