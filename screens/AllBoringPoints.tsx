import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useSelector, useStore} from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import setCurrentPoint from '../actions/CurrentPointAction';
import {removeProject, addProject} from '../actions/PointDetailsActions';
import SetCurrentIndex from '../actions/CurrentIndexAction';
import {RemoveCurrentPoint} from '../actions/CurrentPointAction';
const HeaderLeft = (props) => {
  const store = useStore();
  function onAddProject() {
    //console.log('in add');
    store.dispatch(RemoveCurrentPoint());
    props.navigation.push('New Point', {adding: true});
  }
  return (
    <View style={styles.headerElements}>
      <TouchableOpacity onPress={() => props.setCopyMode(true)}>
        <Icon
          name="layers"
          type="simple-line-icons"
          style={styles.iconStyle}
          color="white"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={onAddProject}>
        <Text style={styles.elem1}>+</Text>
      </TouchableOpacity>
    </View>
    //Header Component End
  );
};

const SwipeRightAction = ({project}) => {
  const store = useStore();
  function onpress() {
    store.dispatch(removeProject(project));
  }
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={styles.swipeRight}>
        <IconSLI name="trash" color="white" />
      </View>
    </TouchableOpacity>
  );
};

const AllBoringPoints = ({navigation, route}) => {
  const [copyMode, setCopyMode] = useState(false);
  navigation.setOptions({
    headerRight: () => (
      <HeaderLeft navigation={navigation} setCopyMode={setCopyMode} />
    ),
  });

  const allpoints = useSelector((state) => state.PointDetails);
  if (allpoints.length === 0) {
    navigation.navigate('New Point', {adding: true});
  }
  const store = useStore();
  const current = useSelector((state) => state.CurrentProject);
  //console.log(current, 'selected');
  function SelectedPoint(selectedID, index) {
    if (!copyMode) {
      store.dispatch(setCurrentPoint(selectedID));
      //console.log(index, 'Selected project Index');
      store.dispatch(SetCurrentIndex(index));
      navigation.push('PointDetailsTabs');
    } else {
      setCopyMode(false);
      store.dispatch(addProject(selectedID));
    }
  }

  return (
    <View>
      <ScrollView>
        {allpoints.map((project, index) =>
          project.projectNum === current ? (
            <View key={index}>
              <Swipeable
                renderRightActions={() => <SwipeRightAction project={index} />}>
                <TouchableOpacity
                  onPress={SelectedPoint.bind(globalThis, project, index)}>
                  <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>{project.pointId}</Text>
                    <Text style={styles.textStyle}>
                      Number: {project.projectNum}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Swipeable>
            </View>
          ) : null,
        )}
      </ScrollView>
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
  swipeRight: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 70,
    height: '90%',
  },
});
export default AllBoringPoints;
