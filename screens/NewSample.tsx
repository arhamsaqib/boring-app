import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
  Platform,
  Button,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

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

const Length = () => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Length</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={value}
        maxLength={12}
      />
    </View>
  );
};

const SampleType = () => {
  const [value, setValue] = useState('---');
  const [crewModalVisibility, setCrewModalVisibility] = useState(false);
  var options = [
    '---',
    'Split Spoon',
    'Shelby Tube',
    'No Recovery',
    'Rock Core',
    'Auger Cuttings',
    'Grab Sample',
    'THD Cone Penetration',
    'Undisturbed Sample',
    'Vane Sheer',
    'Standard Penetration Test',
    'Modified California Sampler',
  ];

  function setModalVis() {
    setCrewModalVisibility(!crewModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Sample Type</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={crewModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={setValue}
      />
    </View>
  );
};

const BlowsInch = (props) => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>{props.name}</Text>
      <TextInput onChangeText={inputHander} value={value} />
    </View>
  );
};

const NValue = () => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>N_Value</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={value}
        maxLength={12}
      />
    </View>
  );
};

const Qu = () => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Qu</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={value}
        maxLength={12}
      />
    </View>
  );
};
const TimeCore = (props) => {
  const [date, setDate] = useState(new Date(0));
  const [show, setShow] = useState(false);
  var time = date.getUTCHours() + 5;
  //console.log(time);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showTimeModal = () => {
    setShow(true);
  };

  // console.log(date);
  return (
    <View style={styles.timePicker}>
      <TouchableOpacity onPress={showTimeModal}>
        <Text style={styles.DMText}>{props.name}</Text>
        <Text style={styles.DMText}>
          {date.getUTCHours() + 5}:{date.getUTCMinutes()}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={5}
          value={date}
          mode={'time'}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

const Recovery = () => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Recovery</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={value}
        maxLength={12}
      />
    </View>
  );
};

const RQD = () => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>RQD</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={value}
        maxLength={12}
      />
    </View>
  );
};
const NewSample = ({navigation}) => {
  return (
    <View style={styles.mainCont}>
      <ScrollView>
        <Depth />
        <Length />
        <SampleType />
        <BlowsInch name={'Blows 1st 6in'} />
        <BlowsInch name={'Blows 2nd 6in'} />
        <BlowsInch name={'Blows 3rd 6in'} />
        <BlowsInch name={'Blows 4th 6in'} />
        <NValue />
        <Qu />
        <TimeCore name={'Begin Time Core'} />
        <TimeCore name={'End Time Core'} />
        <Recovery />
        <RQD />
        <View style={styles.button}>
          <Button title="Add new Sample" onPress={() => {}} />
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

export default NewSample;
