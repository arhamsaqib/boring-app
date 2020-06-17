import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
  Platform,
  Button,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';

//Start of code
//Resuable Model
const ModalView = (props) => {
  function selectedItem(item) {
    props.setVis();
    props.returnVal(item);
    // console.log('item' + item);
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

//Comp 1
const PointID = () => {
  const [value, setvalue] = useState('B-01');
  function inputHandler(enteredText) {
    setvalue(enteredText);
  }
  return (
    <View>
      <View style={styles.PIView}>
        <Text style={styles.PIT1}>PointID</Text>
        <Text style={styles.PIT2}> (Tap to edit)</Text>
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={inputHandler}
        value={value}
      />
    </View>
  );
};
//Comp 2
const DrillingMethod = () => {
  var options = [
    '---',
    'Hollow Stem Auger',
    'Mud Rotary/Wash Bore',
    'Solid Flight Auger',
    'Hand Auger',
    'Backhoe/Bulldozer',
  ];
  const [drillModalVisibility, setDrillModalVisibility] = useState(false);
  const [value, setValue] = useState('---');
  function setModalVis() {
    setDrillModalVisibility(!drillModalVisibility);
  }
  function selectedVal(item) {
    // console.log(item);
    setValue(item);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Drilling Method</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={drillModalVisibility}
        setVis={setModalVis}
        returnVal={selectedVal}
      />
    </View>
  );
};

//Comp 3a
const DrillCrewOtherField = (props) => {
  if (props.check) {
    return (
      <View>
        <Text>Other Drill Crew</Text>
        <TextInput style={styles.textInput} />
      </View>
    );
  } else {
    return null;
  }
};

//Comp 3
const DrillingCrew = (props) => {
  const [value, setValue] = useState('---');
  const [crewModalVisibility, setCrewModalVisibility] = useState(false);
  var options = [
    '---',
    'Building and Earth',
    'South Brothers',
    'Two Men and a Drill',
    'Quantex Drilling',
    'J&L Drilling',
    'Other',
  ];

  function setModalVis() {
    setCrewModalVisibility(!crewModalVisibility);
  }
  //console.log('Value' + value);
  if (value === 'Other') {
    props.enableOther(true);
  } else {
    props.enableOther(false);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Drill Crew</Text>
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
//Comp 4
const HammerType = () => {
  var options = ['---', 'Manual', 'Automatic'];
  const [HammerModalVisibility, setHammerModalVisibility] = useState(false);
  const [value, setValue] = useState('---');
  function setModalVis() {
    setHammerModalVisibility(!HammerModalVisibility);
  }
  function selectedVal(item) {
    // console.log(item);
    setValue(item);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Hammer Type</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={HammerModalVisibility}
        setVis={setModalVis}
        returnVal={selectedVal}
      />
    </View>
  );
};

//Comp 5
const LoggedBy = () => {
  var options = [
    '---',
    'A. Roy',
    'C.McMillian',
    'C.RichardSon',
    'G.Raynor',
    'J.Gatling',
    'J.Jones',
    'J. Marvin',
    'J. Rougui',
    'J. Short',
    'J. Thomton',
    'K. Edmondson',
    'K. Williams',
    'M. Lumpkin',
    'N. Anderson',
    'P. Holt',
    'R. Collins',
    'S. Boskovic',
    'S. Poteracki',
    'T. Hollingsworth',
    'T. Maganti',
  ];
  const [LoggedByVisibility, setLoggedByVisibility] = useState(false);
  const [value, setValue] = useState('---');
  function setModalVis() {
    setLoggedByVisibility(!LoggedByVisibility);
  }
  function selectedVal(item) {
    // console.log(item);
    setValue(item);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Logged By</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={LoggedByVisibility}
        setVis={setModalVis}
        returnVal={selectedVal}
      />
    </View>
  );
};
//Comp 6
const EquipmentUsed = () => {
  var options = [
    '---',
    'CME 550X ATV',
    'CME 75',
    'Deidrich D-50 ATV',
    'Geoprobe 7822DT',
    'Geoprobe 3230DT',
  ];
  const [EquipmentModalVisibility, setEquipmentModalVisibility] = useState(
    false,
  );
  const [value, setValue] = useState('---');
  function setModalVis() {
    setEquipmentModalVisibility(!EquipmentModalVisibility);
  }
  function selectedVal(item) {
    // console.log(item);
    setValue(item);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Equipment Used</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={EquipmentModalVisibility}
        setVis={setModalVis}
        returnVal={selectedVal}
      />
    </View>
  );
};

//Comp 7
const HoleDepthandElevation = (props) => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>{props.name}</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={value}
        maxLength={12}
      />
    </View>
  );
};

//Comp 8
const AugralRefusal = () => {
  const [augralRefusal, setAugralRefusal] = useState('');
  function inputHander(inputText) {
    setAugralRefusal(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Augral Refusal</Text>
      <TextInput onChangeText={inputHander} value={augralRefusal} />
    </View>
  );
};

//Comp 9
const DateDrilled = () => {
  const [currentDate, setCurrentDate] = useState('');
  function setDateFunc(enteredText) {
    setCurrentDate(enteredText);
  }
  console.log(currentDate);
  return (
    <View>
      <Text style={styles.PIT1}>Date Drilled</Text>
      <DatePicker
        style={styles.datePickerComp}
        date={currentDate}
        mode="date"
        placeholder="Date Drilled"
        format="YYYY-MM-DD"
        minDate="2020-05-01"
        maxDate="2025-01-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
        }}
        onDateChange={setDateFunc}
      />
    </View>
  );
};

//Comp 10
const BoringTime = (props) => {
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

//Comp 12
const Station = () => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Station</Text>
      <TextInput onChangeText={inputHander} value={value} />
    </View>
  );
};

//Comp 13
const Offset = () => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Offset</Text>
      <TextInput onChangeText={inputHander} value={value} />
    </View>
  );
};

//Comp 14
const BoringLocation = () => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Boring Location</Text>
      <TextInput onChangeText={inputHander} value={value} />
    </View>
  );
};

//Comp 15
const Weather = () => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Weather</Text>
      <TextInput onChangeText={inputHander} value={value} />
    </View>
  );
};

//Comp 16
const WaterDepth = () => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Water Depth</Text>
      <TextInput onChangeText={inputHander} value={value} />
    </View>
  );
};

//Comp 17
const North = () => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>North</Text>
      <TextInput onChangeText={inputHander} value={value} />
    </View>
  );
};

//Comp 18
const East = () => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>East</Text>
      <TextInput onChangeText={inputHander} value={value} />
    </View>
  );
};
//Default export
const NewPoint = ({navigation}) => {
  const [otherField, enableOther] = useState(false);
  let drillCrewOther = <DrillCrewOtherField check={otherField} />;
  return (
    <View style={styles.mainCont}>
      <ScrollView>
        <PointID />
        <DrillingMethod />
        <DrillingCrew enableOther={enableOther} />
        {drillCrewOther}
        <HammerType />
        <LoggedBy />
        <EquipmentUsed />
        <HoleDepthandElevation name={'Hole Depth'} />
        <AugralRefusal />
        <DateDrilled />
        <BoringTime name={'Boring Begin Time'} />
        <BoringTime name={'Boring End Time'} />
        <HoleDepthandElevation name={'Elevation'} />
        <Station />
        <Offset />
        <BoringLocation />
        <Weather />
        <WaterDepth />
        <North />
        <East />

        <View style={styles.button}>
          <Button title="Add Point" onPress={() => {}} />
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

export default NewPoint;
