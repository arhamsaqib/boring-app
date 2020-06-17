import React from 'react';
import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native';

const logo = require('../assets/logo.jpeg');
const LoadingScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoCont}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={styles.loadingCont}>
        <Text style={styles.text1}>Please Wait</Text>
        <Text style={styles.text2}>Loading Application...</Text>
        <ActivityIndicator
          size="large"
          color="white"
          style={styles.indicator}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#1a4572',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logoCont: {
    height: '13%',
    width: '90%',
    marginTop: '20%',
    marginBottom: '60%',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  loadingCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    fontSize: 20,
    color: 'white',
  },
  text2: {
    fontSize: 15,
    marginTop: 10,
    color: 'white',
  },
  indicator: {
    marginTop: 40,
  },
});
export default LoadingScreen;
