import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const Depth = () => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Depth</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={value}
        maxLength={12}
      />
    </View>
  );
};

const Description = () => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Description</Text>
      <TextInput onChangeText={inputHander} value={value} />
    </View>
  );
};

const Remarks = () => {
  return (
    <View style={styles.mainCont}>
      <Depth />
      <Description />
      <Button title="Add New Remark" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    marginRight: 15,
    marginLeft: 15,
  },
  DMView: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  DMText: {
    marginBottom: 15,
  },
});

export default Remarks;
