import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
  ScrollView,
} from 'react-native';
import {
  GraphicVal,
  USCSNameVal,
  GrainSizeVal,
  PlasticityVal,
  DepositionVal,
  LineTypeVal,
  ConsistencyVal,
  ColorVal,
  MoistureVal,
  RMRVal,
} from '../allValues/LithologyValues';
import {useStore, useSelector} from 'react-redux';
import {addProject, updateProject} from '../actions/LithologyDetailsActions';

const ModalView = (props) => {
  function selectedItem(item) {
    props.setVis();
    props.returnVal(item);
  }

  return (
    <Modal visible={props.modalVisibility} transparent={true}>
      <View style={styles.modalView1}>
        <View style={styles.modalView2}>
          <FlatList
            data={props.options}
            keyExtractor={(item, i) => item}
            renderItem={({item}) => (
              <TouchableOpacity onPress={selectedItem.bind(globalThis, item)}>
                <View style={styles.nameView}>
                  <Text style={styles.text}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const ShowComp = (props) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  // const [value, setValue] = useState('---');
  function setModalVis() {
    setModalVisibility(!modalVisibility);
  }
  function selectedVal(item) {
    // console.log(item);
    // setValue(item);
    props.userSelection(item);
  }
  console.log(props.value + props.name);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>{props.name}</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{props.value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={props.options}
        modalVisibility={modalVisibility}
        setVis={setModalVis}
        returnVal={selectedVal}
      />
    </View>
  );
};

const Depth = (props) => {
  // const [value, setValue] = useState('0');

  function inputHander(inputText) {
    //setValue(inputText);
    props.saveval(inputText);
  }
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

const Bottom = (props) => {
  // const [value, setValue] = useState('0');

  function inputHander(inputText) {
    //setValue(inputText);
    props.saveval(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Bottom</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={props.value}
        maxLength={12}
      />
    </View>
  );
};

const Graphic = (props) => {
  //  const [value, setValue] = useState('---');
  //props.saveval(value);
  var options = GraphicVal;

  return (
    <ShowComp
      name={'Graphic'}
      options={options}
      userSelection={props.saveval}
      value={props.value}
    />
  );
};

const USCSName = (props) => {
  //const [value, setValue] = useState('---');
  // props.saveval(value);
  var options = USCSNameVal;

  return (
    <ShowComp
      name={'USCS Name'}
      options={options}
      userSelection={props.saveval}
      value={props.value}
    />
  );
};

const Consistency = (props) => {
  // const [value, setValue] = useState('---');
  //props.saveval(value);
  var options = ConsistencyVal;
  return (
    <ShowComp
      name={'Consistency'}
      options={options}
      userSelection={props.saveval}
      value={props.value}
    />
  );
};

const Color = (props) => {
  //const [value, setValue] = useState('---');
  // props.saveval(value);
  var options = ColorVal;

  return (
    <ShowComp
      name={props.name}
      options={options}
      userSelection={props.saveval}
      value={props.value}
    />
  );
};

const GrainSize = (props) => {
  //const [value, setValue] = useState('---');
  //props.saveval(value);
  var options = GrainSizeVal;

  return (
    <ShowComp
      name={'Grain Size'}
      options={options}
      userSelection={props.saveval}
      value={props.value}
    />
  );
};

const Plasticity = (props) => {
  // const [value, setValue] = useState('---');
  //props.saveval(value);
  var options = PlasticityVal;

  return (
    <ShowComp
      name={'Plasticity'}
      options={options}
      userSelection={props.saveval}
      value={props.value}
    />
  );
};

const Moisture = (props) => {
  //const [value, setValue] = useState('---');
  //props.saveval(value);
  var options = MoistureVal;

  return (
    <ShowComp
      name={'Moisture'}
      options={options}
      userSelection={props.saveval}
      value={props.value}
    />
  );
};

const RMR = (props) => {
  // const [value, setValue] = useState('---');
  //props.saveval(value);
  var options = RMRVal;

  return (
    <ShowComp
      name={'RMR'}
      options={options}
      userSelection={props.saveval}
      value={props.value}
    />
  );
};

const Description = (props) => {
  // const [value, setValue] = useState('');
  //props.saveval(value);
  function inputHander(inputText) {
    //setValue(inputText);
    props.saveval(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Additional Description</Text>
      <TextInput onChangeText={inputHander} value={props.value} />
    </View>
  );
};

const Deposition = (props) => {
  //const [value, setValue] = useState('---');
  // props.saveval(value);
  var options = DepositionVal;

  return (
    <ShowComp
      name={'Deposition'}
      options={options}
      userSelection={props.saveval}
      value={props.value}
    />
  );
};

const Linetype = (props) => {
  //  const [value, setValue] = useState('---');
  //props.saveval(value);
  var options = LineTypeVal;

  return (
    <ShowComp
      name={'Line Type'}
      options={options}
      userSelection={props.saveval}
      value={props.value}
    />
  );
};

const Lithology = ({navigation, route}) => {
  const [depth, setdepth] = useState('0');
  const [bottom, setbottom] = useState('0');
  const [graphic, setgraphic] = useState('---');
  const [uscs, setuscs] = useState('---');
  const [consistency, setconsistency] = useState('---');
  const [color, setcolor] = useState('---');
  const [addcolor1, setaddcolor1] = useState('---');
  const [addcolor2, setaddcolor2] = useState('---');
  const [grainsize, setgrainsize] = useState('---');
  const [plasticity, setplasticity] = useState('---');
  const [moisture, setmoisture] = useState('---');
  const [rmr, setrmr] = useState('---');
  const [addDescription, setaddDescription] = useState('---');
  const [deposition, setdeposition] = useState('---');
  const [linetype, setlinetype] = useState('---');
  const [upd, setUpd] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (route.params !== undefined) {
      // console.log(route.params.project, 'current sample ');
      setdepth(route.params.project.depth);
      setbottom(route.params.project.bottom);
      setgraphic(route.params.project.graphic);
      setuscs(route.params.project.uscs);
      setconsistency(route.params.project.consistency);
      setcolor(route.params.project.color);
      setaddcolor1(route.params.project.addcolor1);
      setaddcolor2(route.params.project.addcolor2);
      setgrainsize(route.params.project.grainsize);
      setplasticity(route.params.project.plasticity);
      setmoisture(route.params.project.moisture);
      setrmr(route.params.project.rmr);
      setaddDescription(route.params.project.addDescription);
      setdeposition(route.params.project.deposition);
      setlinetype(route.params.project.linetype);
      setUpd(true);
      setIndex(route.params.index);
    }
  }, []);
  const store = useStore();
  function updateValues() {
    store.dispatch(
      updateProject(index, {
        projectNum: currentProject,
        pointNum: currentPoint,
        depth: depth,
        bottom: bottom,
        graphic: graphic,
        uscs: uscs,
        consistency: consistency,
        color: color,
        addcolor1: addcolor1,
        addcolor2: addcolor2,
        grainsize: grainsize,
        plasticity: plasticity,
        moisture: moisture,
        rmr: rmr,
        addDescription: addDescription,
        deposition: deposition,
        linetype: linetype,
      }),
    );
  }

  function saveValues() {
    if (upd) {
      console.log('updating lithology');
      updateValues();
    } else {
      console.log('adding lithiloguy');
      store.dispatch(
        addProject({
          projectNum: currentProject,
          pointNum: currentPoint,
          depth: depth,
          bottom: bottom,
          graphic: graphic,
          uscs: uscs,
          consistency: consistency,
          color: color,
          addcolor1: addcolor1,
          addcolor2: addcolor2,
          grainsize: grainsize,
          plasticity: plasticity,
          moisture: moisture,
          rmr: rmr,
          addDescription: addDescription,
          deposition: deposition,
          linetype: linetype,
        }),
      );
    }
    navigation.pop();
  }

  const currentProject = useSelector((state) => state.CurrentProject);
  const currentPoint = useSelector((state) => state.CurrentPoint.pointId);

  return (
    <View style={styles.mainCont}>
      <ScrollView>
        <Depth value={depth} saveval={(v) => setdepth(v)} />
        <Bottom value={bottom} saveval={(v) => setbottom(v)} />
        <Graphic value={graphic} saveval={(v) => setgraphic(v)} />
        <USCSName value={uscs} saveval={(v) => setuscs(v)} />
        <Consistency value={consistency} saveval={(v) => setconsistency(v)} />
        <Color value={color} name={'Color'} saveval={(v) => setcolor(v)} />
        <Color
          value={addcolor1}
          name={'Additional Color 1'}
          saveval={(v) => setaddcolor1(v)}
        />
        <Color
          value={addcolor2}
          name={'Additional Color 2'}
          saveval={(v) => setaddcolor2(v)}
        />
        <GrainSize value={grainsize} saveval={(v) => setgrainsize(v)} />
        <Plasticity value={plasticity} saveval={(v) => setplasticity(v)} />
        <Moisture value={moisture} saveval={(v) => setmoisture(v)} />
        <RMR value={rmr} saveval={(v) => setrmr(v)} />
        <Description
          value={addDescription}
          saveval={(v) => setaddDescription(v)}
        />
        <Deposition value={deposition} saveval={(v) => setdeposition(v)} />
        <Linetype value={linetype} saveval={(v) => setlinetype(v)} />
        <View style={styles.button}>
          <Button title="Save" onPress={saveValues} />
        </View>
      </ScrollView>
    </View>
  );
};

//--> Styles
const styles = StyleSheet.create({
  headTextStyle: {
    fontSize: 17,
    color: 'grey',
  },
  textInput: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  mainCont: {
    marginRight: 15,
    marginLeft: 15,
  },
  PIT1: {
    fontSize: 15,
  },
  PIT2: {
    fontWeight: 'bold',
  },
  PIView: {
    flexDirection: 'row',
  },
  modalView1: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView2: {
    backgroundColor: 'white',
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  nameView: {
    marginTop: 20,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  text: {
    marginLeft: 10,
    alignItems: 'center',
    fontSize: 15,
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
  datePickerComp: {
    width: '100%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 10,
    paddingBottom: 10,
  },
  timePicker: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
  },
});
export default Lithology;
