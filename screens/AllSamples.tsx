import React, {useState} from 'react';
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
import {removeProject} from '../actions/SampleDetailsActions';

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

const ShowAllSamples = ({navigation}) => {
  const samples = useSelector((state) => state.SampleDetails);
  const currentProject = useSelector((state) => state.CurrentProject);
  const currentPoint = useSelector((state) => state.CurrentPoint.pointId);
  const currentIndex = useState(useSelector((state) => state.CurrentIndex));
  console.log(currentPoint, 'Hellos');
  return (
    <ScrollView>
      {samples.map((project, index) =>
        project.projectNum === currentProject &&
        project.pointNum === currentPoint ? (
          <View key={index}>
            <Swipeable
              renderRightActions={() => <SwipeRightAction project={index} />}>
              <TouchableOpacity
                onPress={() => navigation.push('New Sample', {project, index})}>
                <View style={styles.viewStyle}>
                  <View style={styles.secondcontainer}>
                    <Text style={styles.upperStyle}>
                      Depth: {project.depth}
                    </Text>
                    <Text style={styles.upperStyle}>
                      Type: {project.sampletype}
                    </Text>
                  </View>
                  <Text style={{fontSize: 17}}>Length: {project.length}</Text>
                  <Text style={{fontSize: 14}}>CPoint: {project.pointNum}</Text>
                  <Text style={{fontSize: 14}}>
                    CProject: {project.projectNum}
                  </Text>
                  <Text style={{fontSize: 17}}>Blow Count: </Text>
                </View>
              </TouchableOpacity>
            </Swipeable>
          </View>
        ) : null,
      )}
    </ScrollView>
  );
};

const AllSamples = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <Button
        title="New Sample"
        onPress={() => navigation.push('New Sample')}
      />
      <ShowAllSamples navigation={navigation} />
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
    height: 140,
  },
  upperStyle: {
    fontSize: 12,
    color: 'grey',
  },
  secondcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 6,
  },
});
export default AllSamples;
