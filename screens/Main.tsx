import React, {
  memo,
  useEffect,
  useState,
  useMemo,
  ComponentType,
  useCallback,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useStore} from 'react-redux';
import {Project} from 'entities';
import {ProjectActions} from '../actions';

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
const HeaderGreen = () => {
  return (
    <View style={[styles.headerMain, {backgroundColor: 'green'}]}>
      <View style={styles.headerName}>
        <Text style={styles.titleName}>Projects</Text>
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

interface NoProjectAddProps {
  header: ComponentType<HeaderBlue>;
  children?: React.ReactElement;
  onAdd(): void;
}

const NoProjectAdded = memo((props: NoProjectAddProps) => {
  const {header, onAdd} = props;
  const Header = header;
  const [state, setState] = useState<number>(0);
  useEffect(() => {
    //console.log('onMount');
    //return () => console.log('onUnmount');
  }, []);

  //console.log('Render');
  const isEven = state % 3 === 0;
  const isOdd = useMemo(() => {
    //  console.log('inside UseMemo');
    return state % 3 !== 0;
  }, [state]);

  return (
    <View>
      <Header title={'Project'} />
      <View style={styles.npaNoteCont}>
        <Text style={styles.npaNote}>
          You have no project. Create new project or import it from the cloud.{' '}
          {isEven ? 'Even' : 'Odd'}
        </Text>
      </View>
      <TouchableOpacity onPress={props.onAdd}>
        <View style={styles.buttonView1}>
          <Text style={styles.buttonText}>+</Text>
          <Text style={styles.buttonText}>Create First Project</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setState(state + 1)}>
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

const Main = ({navigation}) => {
  const store = useStore();
  const [projects, setProjects] = useState<Project[]>([]);

  store.subscribe(() => {
    setProjects(store.getState().projects);
  });
  // console.log('state', store.getState());

  // const onNewProj = () => {

  //   // navigation.push('Project Details');
  // };

  const onNewProj = useCallback(() => {
    store.dispatch(
      ProjectActions.addProject({
        name: 'Project 1',
        client: 'Sarmad',
        number: '123123',
        location: 'Pakistan',
      }),
    );
  }, [store]);

  const onRemove = useCallback(
    (index: number) => {
      store.dispatch(ProjectActions.removeProject(index));
    },
    [store],
  );

  const onUpdate = useCallback(
    (index: number) => {
      store.dispatch(
        ProjectActions.updateProject(index, {
          name: 'Project 2',
          client: 'Sarmad',
          number: '123123',
          location: 'Pakistan',
        }),
      );
    },
    [store],
  );

  return (
    <SafeAreaView>
      <NoProjectAdded onAdd={onNewProj} header={HeaderBlue}>
        <Text>No Projects</Text>
      </NoProjectAdded>
      {projects.map((project, index) => (
        <View key={index} style={{flexDirection: 'row', margin: 5}}>
          <Text style={{flex: 1}}>{project.name}</Text>
          <TouchableOpacity onPress={() => onUpdate(index)}>
            <Text>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRemove(index)}>
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
    </SafeAreaView>
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
});
export default Main;
