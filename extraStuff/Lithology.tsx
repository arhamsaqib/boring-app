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
  const [graphicModalVisibility, setGraphicModalVisibility] = useState(false);
  var options = [
    '---',
    'Topsoil',
    'Weathered Rock',
    'Aggregate Base Material',
    'Asphalt',
    'Concrete',
    'Fill',
    'USCS High Plasticity Clay',
    'USCS Low Plasticity Clay',
    'USCS Low to High Plasticity Clay',
    'USCS Low Plasticity Gravelly Clay',
    'USCS Low Plasticity Silty Clay',
    'USCS Low Plasticity Sandy Clay',
    'USCS Clayey Gravel',
    'USCS Silty Gravel',
    'USCS Poorly-Graded Gravel',
    'USCS Poorly-Graded Gravel with Clay',
    'USCS Poorly-Graded Gravel with Silt',
    'USCS Poorly-Graded Sanded Gravel',
    'USCS Well-Graded Gravel',
    'USCS Well-Graded Gravel with Clay',
    'USCS Well-Graded Gravel with Silt',
    'USCS Well-Graded Sanded Gravel',
    'USCS Elastic Silt',
    'USCS Silt',
    'USCS Gravelly Silt',
    'USCS Sandy Silt',
    'USCS High Plasticity Organic Silt or Clay',
    'USCS High Plasticity Organic Silt or Clay withh Shells',
    'USCS Peat',
    'USCS Clayey Sand',
    'USCS Silty Clayey Sand',
    'USCS Silty Sand',
    'USCS Poorly-Graded Sand',
    'USCS Poorly-Graded Gravelly Sand',
    'USCS Poorly-Graded Sand with Clay',
    'USCS Poorly-Graded Sand with Silt',
    'USCS Well-Graded Sandy Gravel',
    'USCS Well-Graded Gravelly Sand',
    'USCS Well-Graded Sand with Clay',
    'USCS Well-Graded Sand with Silt',
    'Soil and Weathered Rock',
    'Basalt',
    'Bedrock',
    'Boulders and Cobbels',
    'Breccia',
    'Chalk',
    'High Plasticity Clay and Plastic Silt',
    'Clayey Chert',
    'Coal',
    'Coral',
    'Decomposed Rock',
    'Metamorphic Rock',
    'Gypsym, Rocksalt etc',
    'Limestone',
    'Sandstone',
    'Sandstone/Shale',
    'Sandy Clay',
    'Sandy Clay with Cobbles and Boulders',
    'Shale',
    'SiltStone',
    'Till',
  ];

  function setModalVis() {
    setGraphicModalVisibility(!graphicModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Graphic</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={graphicModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
  );
};

const USCSName = () => {
  const [value, setValue] = useState('---');
  const [graphicModalVisibility, setGraphicModalVisibility] = useState(false);
  var options = [
    '---',
    'Topsoil',
    'Weathered Rock',
    'Aggregate Base',
    'Asphalt',
    'Bedrock',
    'Chalk',
    'Chert',
    'Clayey Gravel',
    'Clayey Sand',
    'Coal',
    'Concrete',
    'Decomposed Rock',
    'Dolomite',
    'Elastic Silt',
    'Fat Clay',
    'Gypsum',
    'High Plasticity Organic Clay or Silt',
    'Lean Clay',
    'Lean to Fat Clay',
    'Limestone',
    'Low Plasticity Organic Clay or Silt',
    'Peat',
    'Poorly Graded Gravel',
  ];

  function setModalVis() {
    setGraphicModalVisibility(!graphicModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>USCS</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={graphicModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
  );
};

const Consistency = () => {
  const [value, setValue] = useState('---');
  const [graphicModalVisibility, setGraphicModalVisibility] = useState(false);
  var options = [
    '---',
    'Very Loose',
    'Loose',
    'Medium Dense',
    'Dense',
    'Very Dense',
    'Very Soft',
    'Soft',
    'Medium Stiff',
    'Stiff',
    'Very Stiff',
    'Hard',
  ];

  function setModalVis() {
    setGraphicModalVisibility(!graphicModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Consistency</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={graphicModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
  );
};

const Color = (props) => {
  const [value, setValue] = useState('---');
  const [graphicModalVisibility, setGraphicModalVisibility] = useState(false);
  var options = [
    '---',
    'Black',
    'Bluish Black',
    'Bluish Grey',
    'Brown',
    'Brownish yellow',
    'Dark Bluish Grey',
    'Dark Brown',
    'Dark Grey',
    'Dark Grayish Brown',
    'Dark Grayish Green',
    'Dark Greenish Green',
  ];

  function setModalVis() {
    setGraphicModalVisibility(!graphicModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>{props.name}</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={graphicModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
  );
};

const GrainSize = () => {
  const [value, setValue] = useState('---');
  const [graphicModalVisibility, setGraphicModalVisibility] = useState(false);
  var options = [
    '---',
    'Coarse Grained',
    'Fine Grained',
    'Fine to Coarse Grained',
    'Fine to Medium Grained',
    'Medium Grained',
    'Medium to Coarse Grained',
  ];

  function setModalVis() {
    setGraphicModalVisibility(!graphicModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Grain Size</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={graphicModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
  );
};

const Plasticity = () => {
  const [value, setValue] = useState('---');
  const [graphicModalVisibility, setGraphicModalVisibility] = useState(false);
  var options = [
    '---',
    'Medium Plasticity',
    'Low Plasticity',
    'High Plasticity',
  ];

  function setModalVis() {
    setGraphicModalVisibility(!graphicModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Plasticity</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={graphicModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
  );
};

const Moisture = () => {
  const [value, setValue] = useState('---');
  const [graphicModalVisibility, setGraphicModalVisibility] = useState(false);
  var options = ['---', 'Dry', 'Moist', 'Wet', 'Saturated'];

  function setModalVis() {
    setGraphicModalVisibility(!graphicModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Moisture</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={graphicModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
  );
};

const RMR = () => {
  const [value, setValue] = useState('---');
  const [graphicModalVisibility, setGraphicModalVisibility] = useState(false);
  var options = [
    '---',
    'Very Poor Rock Mass Quality',
    'Poor Rock Mass Quality',
    'Fair Rock Mass Quality',
    'Good Rock Mass Quality',
    'Very Good Rock Mass Quality',
  ];

  function setModalVis() {
    setGraphicModalVisibility(!graphicModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>RMR</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={graphicModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
  );
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
  const [graphicModalVisibility, setGraphicModalVisibility] = useState(false);
  var options = [
    '---',
    'Fill',
    'Residual',
    'Alluvial',
    'Colluvial',
    'Loess',
    'Aeolian',
    'Fluvial',
    'Lacustrine',
    'Marine',
    'Weathered Rock',
    'Bedrock',
    'Glacial Till',
  ];

  function setModalVis() {
    setGraphicModalVisibility(!graphicModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Deposition</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={graphicModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
  );
};

const Linetype = () => {
  const [value, setValue] = useState('---');
  const [graphicModalVisibility, setGraphicModalVisibility] = useState(false);
  var options = [
    '---',
    'None',
    'Solid',
    'Dash',
    'Dot',
    'Dash-Dot',
    'Dash-Dot-Dot',
    'Dash-Dash-Dot',
    'Dash 2',
    'Dot 2',
    'Dash-Dot 2',
    'Dash-Dash-Dot 2',
    'Dash 3',
    'Dot 3',
    'Dash-Dot 3',
    'Dash-Dot-Dot 3',
    'Dash-Dash-Dot 3',
  ];

  function setModalVis() {
    setGraphicModalVisibility(!graphicModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Line Type</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={graphicModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
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
