import React, {useState} from 'react';
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
  const [value, setValue] = useState('---');
  function setModalVis() {
    setModalVisibility(!modalVisibility);
  }
  function selectedVal(item) {
    // console.log(item);
    setValue(item);
    props.userSelection(item);
  }
  console.log(value + props.name);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>{props.name}</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
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

const Depth = () => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Depth</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={value}
        maxLength={12}
      />
    </View>
  );
};

const Bottom = () => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Bottom</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={value}
        maxLength={12}
      />
    </View>
  );
};

const Graphic = () => {
  const [value, setValue] = useState('---');
  var options = GraphicVal;

  return (
    <ShowComp name={'Graphic'} options={options} userSelection={setValue} />
  );
};

const USCSName = () => {
  const [value, setValue] = useState('---');
  var options = USCSNameVal;

  return (
    <ShowComp name={'USCS Name'} options={options} userSelection={setValue} />
  );
};

const Consistency = () => {
  const [value, setValue] = useState('---');
  var options = ConsistencyVal;
  return (
    <ShowComp name={'Consistency'} options={options} userSelection={setValue} />
  );
};

const Color = (props) => {
  const [value, setValue] = useState('---');
  var options = ColorVal;

  return (
    <ShowComp name={props.name} options={options} userSelection={setValue} />
  );
};

const GrainSize = () => {
  const [value, setValue] = useState('---');
  var options = GrainSizeVal;

  return (
    <ShowComp name={'Grain Size'} options={options} userSelection={setValue} />
  );
};

const Plasticity = () => {
  const [value, setValue] = useState('---');
  var options = PlasticityVal;

  return (
    <ShowComp name={'Plasticity'} options={options} userSelection={setValue} />
  );
};

const Moisture = () => {
  const [value, setValue] = useState('---');
  var options = MoistureVal;

  return (
    <ShowComp name={'Moisture'} options={options} userSelection={setValue} />
  );
};

const RMR = () => {
  const [value, setValue] = useState('---');
  var options = RMRVal;

  return <ShowComp name={'RMR'} options={options} userSelection={setValue} />;
};

const Description = () => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Additional Description</Text>
      <TextInput onChangeText={inputHander} value={value} />
    </View>
  );
};

const Deposition = () => {
  const [value, setValue] = useState('---');
  var options = DepositionVal;

  return (
    <ShowComp name={'Deposition'} options={options} userSelection={setValue} />
  );
};

const Linetype = () => {
  const [value, setValue] = useState('---');
  var options = LineTypeVal;

  return (
    <ShowComp name={'Line Type'} options={options} userSelection={setValue} />
  );
};

const Lithology = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <ScrollView>
        <Depth />
        <Bottom />
        <Graphic />
        <USCSName />
        <Consistency />
        <Color name={'Color'} />
        <Color name={'Additional Color 1'} />
        <Color name={'Additional Color 2'} />
        <GrainSize />
        <Plasticity />
        <Moisture />
        <RMR />
        <Description />
        <Deposition />
        <Linetype />
        <View style={styles.button}>
          <Button title="Add new Lithology" onPress={() => {}} />
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
