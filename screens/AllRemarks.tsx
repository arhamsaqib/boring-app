import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import {useSelector, useStore} from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import IconSLI from 'react-native-vector-icons/SimpleLineIcons';
import {removeProject} from '../actions/RemarkDetailsActions';

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

const ShowAllRemarks = ({navigation}) => {
  const remarks = useSelector((state) => state.RemarkDetails);
  const currentProject = useSelector((state) => state.CurrentProject);
  const currentPoint = useSelector((state) => state.CurrentPoint.pointId);
  return (
    <ScrollView>
      {remarks.map((project, index) =>
        project.projectNum === currentProject &&
        project.pointNum === currentPoint ? (
          <View key={index}>
            <Swipeable
              renderRightActions={() => <SwipeRightAction project={index} />}>
              <TouchableOpacity
                onPress={() =>
                  navigation.push('New Remarks', {project, index})
                }>
                <View style={styles.viewStyle}>
                  <Text style={styles.text1}>Depth: {project.depth}</Text>
                  <Text style={styles.text2}>{project.description}</Text>
                </View>
              </TouchableOpacity>
            </Swipeable>
          </View>
        ) : null,
      )}
    </ScrollView>
  );
};

const AllRemarks = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <Button
        title="+   NEW REMARK"
        onPress={() => navigation.push('New Remarks')}
      />
      <ShowAllRemarks navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    marginTop: 10,
    marginLeft: '1%',
    marginRight: '1%',
  },
  swipeRight: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 70,
    height: '90%',
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
    marginTop: 15,
    marginBottom: 6,
  },
  text2: {
    fontSize: 17,
  },
});

export default AllRemarks;
