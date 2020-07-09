import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import {useFirebase} from 'react-redux-firebase';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useStore} from 'react-redux';
import {addProject as projectAction} from '../actions/ProjectDetailsActions';
import {addProject as pointAction} from '../actions/PointDetailsActions';
import {addProject as sampleAction} from '../actions/SampleDetailsActions';
import {addProject as litAction} from '../actions/LithologyDetailsActions';
import {addProject as remarkAction} from '../actions/RemarkDetailsActions';

const ActivityModal = (props) => {
  return (
    <Modal visible={props.animating} transparent={true}>
      <View style={styles.modalView1}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" animating={props.animating} />
        </View>
      </View>
    </Modal>
  );
};

const CloudProjects = () => {
  const store = useStore();
  const [projects, setProjects] = useState(['']);
  const [animating, setAnimating] = useState(true);
  const firebase = useFirebase();
  useEffect(() => {
    firebase.database().ref('/Projects/').on('value', onDataget, error);
    function onDataget(data) {
      //console.log(data.val(), 'data');
      if (data) {
        const values = data.val();

        const keys = Object.keys(values);

        setProjects(keys);
        /* for (let index = 0; index < keys.length; index++) {
        const element = keys[index];
        // console.log(element, 'something')
      }*/
        if (keys !== undefined) {
          setAnimating(false);
        }
      }
    }
  }, []);

  function error(err) {
    console.log('Error! ', err);
  }
  //------------------------------Import Project--------------------
  const [details, setDetails] = useState();
  const [samples, setSample] = useState();
  const [lithologies, setLithologies] = useState();
  const [remarks, setRemarks] = useState();
  const [points, setPoints] = useState();
  function importProject(name) {
    firebase
      .database()
      .ref('/Projects/' + name)
      .on('value', selectedProject, error);
  }
  function selectedProject(project) {
    const p = project.val();
    const keysPD = Object.keys(p.ProjectDetails);
    for (let i = 0; i < keysPD.length; i++) {
      const element = p.ProjectDetails[keysPD[i]];
      store.dispatch(projectAction(element));
      // /store.dispatch(addProject(element));
    }
    //--->Point
    if (p.Points !== undefined) {
      const keysP = Object.keys(p.Points);
      for (let i = 0; i < keysP.length; i++) {
        const element = p.Points[keysP[i]];
        store.dispatch(pointAction(element));
        // /store.dispatch(addProject(element));
      }
    }
    //--->Sample
    if (p.Samples !== undefined) {
      const keysS = Object.keys(p.Samples);
      for (let i = 0; i < keysS.length; i++) {
        const element = p.Samples[keysS[i]];
        store.dispatch(sampleAction(element));
        // /store.dispatch(addProject(element));
      }
    }
    //-->Lithologies
    if (p.Lithologies !== undefined) {
      const keysL = Object.keys(p.Lithologies);
      for (let i = 0; i < keysL.length; i++) {
        const element = p.Lithologies[keysL[i]];
        store.dispatch(litAction(element));
        // /store.dispatch(addProject(element));
      }
    }
    //-->Remarks
    if (p.Remarks !== undefined) {
      const keysR = Object.keys(p.Remarks);
      for (let i = 0; i < keysR.length; i++) {
        const element = p.Remarks[keysR[i]];
        store.dispatch(remarkAction(element));
        // /store.dispatch(addProject(element));
      }
    }
    Alert.alert('Imported!');
  }

  //console.log(details, points, samples, lithologies, remarks);
  //------------------------------Import project--------------------
  return (
    <View>
      <ActivityModal animating={animating} />
      {projects.map((name, index) => (
        <ScrollView key={index}>
          <View style={styles.mainView}>
            <View style={styles.innerView}>
              <Text style={styles.nameStyle}>{name}</Text>
              <TouchableOpacity onPress={importProject.bind(globalThis, name)}>
                <View style={styles.importStyle}>
                  <Text style={{color: 'grey'}}>IMPORT</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    height: 140,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  modalView1: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  innerView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 50,
  },
  nameStyle: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  importStyle: {
    marginRight: 16,
    height: 30,
    width: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});

export default CloudProjects;
