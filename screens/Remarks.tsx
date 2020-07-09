import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useStore, useSelector} from 'react-redux';
import {addProject, updateProject} from '../actions/RemarkDetailsActions';

const Depth = (props) => {
  // const [value, setValue] = useState('0');
  function inputHander(inputText) {
    props.saveval(inputText);
  }
  //props.saveval(value);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Depth</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={props.value}
        maxLength={12}
      />
    </View>
  );
};

const Description = (props) => {
  //const [value, setValue] = useState('');
  //  props.saveval(value);
  function inputHander(inputText) {
    props.saveval(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Description</Text>
      <TextInput onChangeText={inputHander} value={props.value} />
    </View>
  );
};

const Remarks = ({navigation, route}) => {
  const [depth, setdepth] = useState(0);
  const [description, setdescription] = useState('');
  const [upd, setUpd] = useState(false);
  const [index, setIndex] = useState(0);
  const store = useStore();

  function updatevalues() {
    store.dispatch(
      updateProject(index, {
        depth: depth,
        description: description,
        projectNum: currentProject,
        pointNum: currentPoint,
      }),
    );
  }

  function onSave() {
    if (upd) {
      updatevalues();
    } else {
      store.dispatch(
        addProject({
          depth: depth,
          description: description,
          projectNum: currentProject,
          pointNum: currentPoint,
        }),
      );
    }
    navigation.pop();
  }
  useEffect(() => {
    if (route.params !== undefined) {
      // console.log(route.params.project, 'current sample ');
      setdepth(route.params.project.depth);
      setdescription(route.params.project.description);
      setUpd(true);
      setIndex(route.params.index);
    }
  }, []);
  const currentProject = useSelector((state) => state.CurrentProject);
  const currentPoint = useSelector((state) => state.CurrentPoint.pointId);
  return (
    <View style={styles.mainCont}>
      <Depth value={depth} saveval={(v) => setdepth(v)} />
      <Description value={description} saveval={(v) => setdescription(v)} />
      <Button title="Save" onPress={onSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainCont: {
    marginRight: 15,
    marginLeft: 15,
  },
  DMView: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  DMText: {
    marginBottom: 15,
  },
});

export default Remarks;
