import React, {memo, useEffect, useState, useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Alert,
} from 'react-native';
import {useStore, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {removeProject} from '../actions/ProjectDetailsActions';
import setCurrentProject from '../actions/CurrentProjectAction';

interface HeaderBlue {
  title: string;
}

const HeaderBlue = (props: HeaderBlue) => {
  return (
    <View style={styles.headerMain}>
      <View style={styles.headerName}>
        <Text style={styles.titleName}>{props.title}</Text>
      </View>
      <View style={styles.headerElements}>
        <TouchableOpacity onPress={() => console.log('Download Icon')}>
          <Icon
            name="cloud-download"
            type="simple-line-icons"
            style={styles.iconStyle}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('ADD Icon')}>
          <Text style={styles.elem1}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
    //Header Component End
  );
};
const Header = ({navigation}) => {
  return (
    <View style={[styles.headerMain]}>
      <View style={styles.headerName}>
        <Text style={styles.titleName}>Projects</Text>
      </View>
      <View style={styles.headerElements}>
        <TouchableOpacity onPress={() => navigation.navigate('Cloud')}>
          <Icon
            name="cloud-download"
            type="simple-line-icons"
            style={styles.iconStyle}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('Project Details')}>
          <Text style={styles.elem1}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
    //Header Component End
  );
};

interface NoProjectAddProps {
  children?: React.ReactElement;
  onAdd(): void;
  cloud(): void;
}

const NoProjectAdded = memo((props: NoProjectAddProps) => {
  const [state, setState] = useState<number>(0);
  useEffect(() => {
    //console.log('onMount');
    //return () => console.log('onUnmount');
  }, []);

  const [projects, setProjects] = useState([]);
  const store = useStore();
  store.subscribe(() => {
    setProjects(store.getState());
  });
  //console.log(projects, 'InStore');

  //console.log('Render');
  const isEven = state % 3 === 0;
  const isOdd = useMemo(() => {
    //  console.log('inside UseMemo');
    return state % 3 !== 0;
  }, [state]);

  return (
    <View>
      <View style={styles.npaNoteCont}>
        <Text style={styles.npaNote}>
          You have no project. Create new project or import it from the cloud.
        </Text>
      </View>
      <TouchableOpacity onPress={props.onAdd}>
        <View style={styles.buttonView1}>
          <Text style={styles.buttonText}>+</Text>
          <Text style={styles.buttonText}>Create First Project</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.cloud}>
        <View style={styles.buttonView2}>
          <Icon
            name="cloud-download"
            type="simple-line-icons"
            style={styles.iconStyle}
            color="white"
          />
          <Text style={styles.buttonText}>Import Project</Text>
        </View>
      </TouchableOpacity>
      {props.children}
    </View>
  );
});

const SwipeRightAction = ({project}) => {
  const store = useStore();
  function onpress() {
    Alert.alert(
      'Delete Project',
      'This project will be deleted. Are you sure?',
      [
        {
          text: 'No',
          onPress: () => console.log('No Pressed'),
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => store.dispatch(removeProject(project))},
      ],
    );
    //   store.dispatch(removeProject(project));
  }
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.swipeRight}>
        <IconSLI name="trash" color="white" />
      </View>
    </TouchableOpacity>
  );
};

const AllProjects = ({navigation}) => {
  const details = useSelector((state) => state.ProjectDetails);
  console.log(details, 'state');
  const store = useStore();
  function SelectProject(project, index) {
    store.dispatch(setCurrentProject(project.number));
    navigation.navigate('Project Details', {project, index});
  }
  return (
    <ScrollView>
      {details.map((project, index) => (
        <View key={index}>
          <Swipeable
            renderRightActions={() => <SwipeRightAction project={index} />}>
            <TouchableOpacity
              onPress={SelectProject.bind(globalThis, project, index)}>
              <View style={styles.viewStyle}>
                <Text style={styles.textStyle1}>{project.number}</Text>
                <Text style={styles.textStyle2}>{project.name}</Text>
                <Text style={styles.textStyle1}>{project.id}</Text>
              </View>
            </TouchableOpacity>
          </Swipeable>
        </View>
      ))}
    </ScrollView>
  );
};

const Main = ({navigation}) => {
  const onBackPress = () => {
    // /console.log('Back Pressed');
    BackHandler.exitApp();
    return true;
  };
  BackHandler.addEventListener('hardwareBackPress', onBackPress);
  /* const firebase = useFirebase();
  firebase
    .database()
    .ref('Projects')
    .push({name: 'shuja', password: 'hahabisti123'});*/
  const onNewProj = () => {
    navigation.push('Project Details');
  };
  const details = useSelector((state) => state.ProjectDetails);
  let pageToLoad = (
    <NoProjectAdded
      onAdd={onNewProj}
      cloud={() => navigation.navigate('Cloud')}
    />
  );
  if (details.length >= 1) {
    pageToLoad = <AllProjects navigation={navigation} />;
  }
  return (
    <View>
      <Header navigation={navigation} />
      {pageToLoad}
    </View>
  );
};
const styles = StyleSheet.create({
  headerMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#1a4572',
    height: 60,
  },
  headerName: {
    marginLeft: '5%',
    alignItems: 'center',
  },
  headerElements: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '4%',
    justifyContent: 'center',
  },
  titleName: {
    fontSize: 18,
    color: 'white',
  },
  elem1: {
    fontSize: 20,
    color: 'white',
    marginLeft: 15,
  },
  iconStyle: {
    height: 20,
    width: 30,
    justifyContent: 'center',
  },
  npaNoteCont: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
  },
  npaNote: {
    fontSize: 15,
    textAlign: 'center',
  },
  buttonView1: {
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    width: '95%',
    backgroundColor: '#3f51b5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonView2: {
    marginLeft: 10,
    marginRight: 10,
    height: 50,
    width: '95%',
    backgroundColor: '#5bb85d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 10,
  },
  viewStyle: {
    height: 100,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    margin: 3,
    justifyContent: 'center',
  },
  textStyle2: {
    fontSize: 15,
    marginLeft: 15,
  },
  textStyle1: {
    fontSize: 12,
    marginLeft: 15,
    color: 'grey',
    marginBottom: 2,
  },
  swipeRight: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 70,
    height: '90%',
  },
});
export default Main;
