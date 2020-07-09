import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  BackHandler,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useStore} from 'react-redux';
import {
  addProject,
  updateProject,
  removeProject,
} from '../actions/ProjectDetailsActions';
import {RemoveCurrentPoint} from '../actions/CurrentPointAction';
import {useFirebase} from 'react-redux-firebase';
import {useSelector} from 'react-redux';

//import AsyncStorage from '@react-native-community/async-storage';
const ProjectDetails = ({navigation, route}) => {
  const [index, setIndex] = useState(0);

  //Navigation Start----------------------------------
  function nextScreen() {
    store.dispatch(RemoveCurrentPoint());
    navigation.push('BoringPoints');
  }
  //Navigation End--------------------------------------
  //Redux Store Start---------------------------------------------
  const store = useStore();
  function newAdd() {
    store.dispatch(
      addProject({
        name: name,
        location: location,
        number: number,
        client: client,
        //id: uniqueID,
      }),
    );
  }
  function updateValues() {
    store.dispatch(
      updateProject(index, {
        name: name,
        location: location,
        number: number,
        client: client,
      }),
    );
  }
  function deleteProject() {
    store.dispatch(removeProject(index));
    navigation.push('Main');
  }
  //Redux Store End-----------------------------------------

  //Back Hander Start---------------------
  const onBackPress = () => {
    // /console.log('Back Pressed');
    if (value) {
      //console.log('update');
      updateValues();
    } else {
      // console.log('add');
      newAdd();
    }

    navigation.pop();
    return true;
  };
  BackHandler.addEventListener('hardwareBackPress', onBackPress);
  //Back Handler End----------------------------------
  const [client, setClient] = useState('');
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [value, setValue] = useState(false);
  const [editable, setEditable] = useState(true);

  // /console.log(ID, 'unoque ID');

  useEffect(() => {
    if (route.params !== undefined) {
      setClient(route.params.project.client);
      setLocation(route.params.project.location);
      setNumber(route.params.project.number);
      setName(route.params.project.name);
      setIndex(route.params.index);
      //setUniqueID(route.params.project.id);
      setValue(true);
      setEditable(false);
    }
    //return () => console.log('onUnmount');
  }, []);

  function clientHandler(enteredtext) {
    setClient(enteredtext);
  }
  function nameHandler(enteredtext) {
    setName(enteredtext);
  }
  function locationHandler(enteredtext) {
    setLocation(enteredtext);
  }
  function numberHandler(enteredtext) {
    setNumber(enteredtext);
  }
  const firebase = useFirebase();
  const currentProject = useSelector((state) => state.CurrentProject);
  const allpoints = useSelector((state) => state.PointDetails);
  const samples = useSelector((state) => state.SampleDetails);
  const remarks = useSelector((state) => state.RemarkDetails);
  const lithologies = useSelector((state) => state.LithologyDetails);

  function saveToCloud() {
    allpoints.forEach((element) => {
      if (element.projectNum === number) {
        firebase
          .database()
          .ref('Projects/' + number + '/Points')
          .push(element);
        //---------Samples
        samples.forEach((sample) => {
          if (
            sample.projectNum === number &&
            sample.pointNum === element.pointId
          ) {
            firebase
              .database()
              .ref('Projects/' + number + '/Samples')
              .push(sample);
          }
        });
        //----------Lithology
        lithologies.forEach((lit) => {
          if (lit.projectNum === number && lit.pointNum === element.pointId) {
            firebase
              .database()
              .ref('Projects/' + number + '/Lithologies')
              .push(lit);
          }
        });

        //----------Remarks

        remarks.forEach((remark) => {
          if (
            remark.projectNum === number &&
            remark.pointNum === element.pointId
          ) {
            firebase
              .database()
              .ref('Projects/' + number + '/Remarks')
              .push(remark);
          }
        });

        //----------Remarks
      }
    });
    firebase
      .database()
      .ref('Projects/' + number + '/ProjectDetails')
      .push({
        name: name,
        client: client,
        location: location,
        number: number,
      });
    //--------

    Alert.alert('Successfully Uploaded! ');
    //--------
  }

  return (
    <View style={styles.mainCont}>
      <View>
        <View style={styles.innerCont}>
          <Text style={styles.textStyle}>Client</Text>
          <TextInput
            style={styles.inputBar}
            onChangeText={clientHandler}
            value={client}
          />
        </View>
        <View style={styles.innerCont}>
          <Text style={styles.textStyle}>Project Name</Text>
          <TextInput
            style={styles.inputBar}
            onChangeText={nameHandler}
            value={name}
          />
        </View>
        <View style={styles.innerCont}>
          <Text style={styles.textStyle}>Location</Text>
          <TextInput
            style={styles.inputBar}
            onChangeText={locationHandler}
            value={location}
          />
        </View>
        <View style={styles.innerCont}>
          <Text style={styles.textStyle}>Project Number</Text>
          <TextInput
            style={styles.inputBar}
            onChangeText={numberHandler}
            value={number}
            editable={editable}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={nextScreen}>
          <View style={styles.buttonView1}>
            <Text style={styles.buttonText}>Boring Points </Text>
            <Icon name="arrow-right" color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={deleteProject}>
          <View style={styles.buttonView2}>
            <Text style={styles.buttonText}>Delete Project </Text>
            <Icon name="trash" color="white" />
          </View>
        </TouchableOpacity>
        <View style={styles.twoButton}>
          <TouchableOpacity onPress={saveToCloud}>
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
    // marginLeft: 17,
    justifyContent: 'center',
    width: 190,
  },
  buttonView4: {
    height: 50,
    backgroundColor: '#5cb85c',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    // marginLeft: 5,
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
