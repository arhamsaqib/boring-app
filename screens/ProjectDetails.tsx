import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  BackHandler,
} from 'react-native';
import {connect, useStore} from 'react-redux';
//import {Client} from '../actions/ProjectDetailsAction';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {Client} from '../actions/User';

//import AsyncStorage from '@react-native-community/async-storage';
const ProjectDetails = ({navigation, clientValue}) => {
  const dispatch = useDispatch();
  dispatch(Client({HELLO: 'ARHAM'}));
  const details = useSelector((state) => state);
  console.log(details, 'detailsVal');
  //console.log(clientValue, 'clientValue');
  const [id, setId] = useState(0);
  function nextScreen() {
    navigation.push('BoringPoints');
  }

  /*
  const onBackPress = () => {
    console.log('Back Pressed');
    navigation.pop();
    return true;
  };

  const storeData = async (value) => {
    console.log(id + 'store');
    try {
      await AsyncStorage.setItem('@project_ID', id.toString());
    } catch (e) {
      // saving error
    }
  };
  // storeData('1');
  const getData = async () => {
    try {
      const valueGet = await AsyncStorage.getItem('@project_ID');
      console.log(valueGet + 'vg');
      var value = 100;
      if (valueGet !== null) {
        value = parseInt(valueGet, 10);
      } else {
        value = id;
      }
      setId(value + 1);
      console.log('id just set' + id);
    } catch (e) {
      console.log('cant get value');
    }
  };
  BackHandler.addEventListener('hardwareBackPress', onBackPress);*/
  const [client, setClient] = useState();
  function clientInputHandler(enteredText) {
    setClient(enteredText);
    store.dispatch();
  }
  const store = useStore();
  // console.log(client);
  return (
    <View style={styles.mainCont}>
      <View>
        <View style={styles.innerCont}>
          <Text style={styles.textStyle}>Client</Text>
          <TextInput
            style={styles.inputBar}
            onChangeText={clientInputHandler}
            value={client}
          />
        </View>
        <View style={styles.innerCont}>
          <Text style={styles.textStyle}>Project Name</Text>
          <TextInput style={styles.inputBar} />
        </View>
        <View style={styles.innerCont}>
          <Text style={styles.textStyle}>Location</Text>
          <TextInput style={styles.inputBar} />
        </View>
        <View style={styles.innerCont}>
          <Text style={styles.textStyle}>Project Number</Text>
          <TextInput style={styles.inputBar} />
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={nextScreen}>
          <View style={styles.buttonView1}>
            <Text style={styles.buttonText}>Boring Points </Text>
            <Icon name="arrow-right" color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.buttonView2}>
            <Text style={styles.buttonText}>Delete Project </Text>
            <Icon name="trash" color="white" />
          </View>
        </TouchableOpacity>
        <View style={styles.twoButton}>
          <TouchableOpacity>
            <View style={styles.buttonView3}>
              <Text style={styles.buttonText}>Save to Cloud </Text>
              <Icon name="cloud-upload" color="white" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.buttonView4}>
              <Text style={styles.buttonText}>Email .XLSX </Text>
              <Icon name="rocket" color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainCont: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  textStyle: {
    fontSize: 16,
    color: 'grey',
  },
  inputBar: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  innerCont: {
    marginTop: 8,
  },
  buttonView1: {
    height: 50,
    backgroundColor: '#4050b5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonView2: {
    height: 50,
    backgroundColor: '#d9544e',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonView3: {
    height: 50,
    backgroundColor: '#f0ad4e',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
    justifyContent: 'center',
    width: 190,
  },
  buttonView4: {
    height: 50,
    backgroundColor: '#5cb85c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    width: 190,
  },
  buttonText: {
    color: 'white',
  },
  twoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProjectDetails;
