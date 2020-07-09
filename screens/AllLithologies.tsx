import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useSelector, useStore} from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import {removeProject} from '../actions/LithologyDetailsActions';

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

const ShowAll = ({navigation}) => {
  const lithologies = useSelector((state) => state.LithologyDetails);
  const currentProject = useSelector((state) => state.CurrentProject);
  const currentPoint = useSelector((state) => state.CurrentPoint.pointId);
  return (
    <ScrollView>
      {lithologies.map((project, index) =>
        project.projectNum === currentProject &&
        project.pointNum === currentPoint ? (
          <View key={index}>
            <Swipeable
              renderRightActions={() => <SwipeRightAction project={index} />}>
              <TouchableOpacity
                onPress={() =>
                  navigation.push('New Lithology', {project, index})
                }>
                <View style={styles.viewStyle}>
                  <Text style={styles.text1}>
                    {project.depth}-{project.bottom}
                  </Text>
                  <Text style={styles.text2}>{project.consistency}</Text>
                </View>
              </TouchableOpacity>
            </Swipeable>
          </View>
        ) : null,
      )}
    </ScrollView>
  );
};
const AllLithologies = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <Button
        title="+   NEW LITHOLOGY"
        onPress={() => navigation.push('New Lithology')}
      />
      <ShowAll navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    marginTop: 10,
    marginLeft: '1%',
    marginRight: '1%',
    backgroundColor: 'white',
    flex: 1,
  },
  viewStyle: {
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginBottom: 2,
    marginHorizontal: 5,
    height: 80,
  },
  text1: {
    fontSize: 12,
    color: 'grey',
    marginTop: 5,
    marginBottom: 12,
  },
  text2: {
    fontSize: 15,
  },
  swipeRight: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 70,
    height: '90%',
  },
});
export default AllLithologies;
