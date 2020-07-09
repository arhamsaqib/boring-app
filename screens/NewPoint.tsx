import React, {useState, useEffect} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  DrillingMethodVal,
  DrillingCrewVal,
  LoggedByVal,
  EquipmentUsedVal,
  HammerTypeVal,
} from '../allValues/NewPointValues';
import {addProject, updateProject} from '../actions/PointDetailsActions';
import setCurrentPoint, {
  RemoveCurrentPoint,
} from '../actions/CurrentPointAction';
import {useStore, useSelector} from 'react-redux';
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
const ActivityModal = (props) => {
  return (
    <Modal visible={props.modalVisibility} transparent={true}>
      <View style={styles.modalView1}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size="large" animating={props.aniamting} />
        </View>
      </View>
    </Modal>
  );
};
const AlertModal = (props) => {
  return (
    <Modal visible={true} transparent={true}>
      <View style={styles.modalView1}>
        <View style={styles.AlertmodalView2}>
          <Text>Hello</Text>
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
  //  console.log(value + props.name);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>{props.name}</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{props.global}</Text>
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

const CompWithModal = (props) => {
  var options;
  const [value, setValue] = useState('');

  // console.log(value, 'val', props.default, 'props');
  if (props.name === 'Drilling Method') {
    options = DrillingMethodVal;
  }
  if (props.name === 'Drilling Crew') {
    options = DrillingCrewVal;
  }
  if (props.name === 'Logged By') {
    options = LoggedByVal;
  }
  if (props.name === 'Hammer Type') {
    options = HammerTypeVal;
  }
  if (props.name === 'Equipment Used') {
    options = EquipmentUsedVal;
  }

  props.setvalueR(value);
  //
  //console.log(choice);
  return (
    <ShowComp
      name={props.name}
      options={options}
      userSelection={setValue}
      global={props.value}
    />
  );
};

//Comp 1
const PointID = (props) => {
  const [value, setvalue] = useState(props.default);

  props.setvalueR(value);
  return (
    <View>
      <View style={styles.PIView}>
        <Text style={styles.PIT1}>PointID</Text>
        <Text style={styles.PIT2}> (Tap to edit)</Text>
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={setvalue}
        value={props.value}
        //editable is used to make TextInput enable/disable
        editable={props.editable}
      />
    </View>
  );
};
//Comp 2
/*
const DrillingMethod = () => {
  var options = DrillingMethodVal;
  const [value, setValue] = useState('');

  return (
    <ShowComp
      name={'Drilling Method'}
      options={options}
      userSelection={setValue}
    />
  );
};*/

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
  var options = DrillingCrewVal;
  props.setvalueR(value);
  //console.log('Value' +
  if (value === 'Other') {
    props.enableOther(true);
  } else {
    props.enableOther(false);
  }
  return (
    <ShowComp
      name={'Drilling Crew'}
      options={options}
      userSelection={setValue}
      global={props.value}
    />
  );
};
//Comp 4
/*
const HammerType = () => {
  var options = HammerTypeVal;
  const [value, setValue] = useState('---');
  return (
    <ShowComp name={'Hammer Type'} options={options} userSelection={setValue} />
  );
};

//Comp 5
const LoggedBy = () => {
  var options = LoggedByVal;

  const [value, setValue] = useState('---');

  return (
    <ShowComp name={'Logged By'} options={options} userSelection={setValue} />
  );
};
//Comp 6
const EquipmentUsed = () => {
  var options = EquipmentUsedVal;

  const [value, setValue] = useState('---');

  return (
    <ShowComp
      name={'Equipment Used'}
      options={options}
      userSelection={setValue}
    />
  );
};
*/
//Comp 7
const HoleDepthandElevation = (props) => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    setValue(inputText);
  }
  props.setvalueR(value);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>{props.name}</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={props.value}
        maxLength={12}
      />
    </View>
  );
};

//Comp 8
const AugralRefusal = (props) => {
  // console.log('mount');
  const [augralRefusal, setAugralRefusal] = useState(props.default);
  function inputHander(inputText) {
    props.setvalueR(inputText);
  }

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Augral Refusal</Text>
      <TextInput onChangeText={inputHander} value={props.value} />
    </View>
  );
};

//Comp 9x
const DateDrilled = (props) => {
  const [currentDate, setCurrentDate] = useState('');
  function setDateFunc(enteredText) {
    setCurrentDate(enteredText);
  }
  props.setvalueR(currentDate);
  console.log(currentDate);
  return (
    <View>
      <Text style={styles.PIT1}>Date Drilled</Text>
      <DatePicker
        style={styles.datePickerComp}
        date={props.value}
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
    props.setvalueR(date);
  };
  const showTimeModal = () => {
    setShow(true);
  };
  // if (date !== undefined) props.setvalueR(date);

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
          value={props.value}
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
const Station = (props) => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  props.setvalueR(value);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Station</Text>
      <TextInput onChangeText={inputHander} value={props.value} />
    </View>
  );
};

//Comp 13
const Offset = (props) => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  props.setvalueR(value);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Offset</Text>
      <TextInput onChangeText={inputHander} value={props.value} />
    </View>
  );
};

//Comp 14
const BoringLocation = (props) => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  props.setvalueR(value);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Boring Location</Text>
      <TextInput onChangeText={inputHander} value={props.value} />
    </View>
  );
};

//Comp 15
const Weather = (props) => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  props.setvalueR(value);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Weather</Text>
      <TextInput onChangeText={inputHander} value={props.value} />
    </View>
  );
};

//Comp 16
const WaterDepth = (props) => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  props.setvalueR(value);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Water Depth</Text>
      <TextInput onChangeText={inputHander} value={props.value} />
    </View>
  );
};

//Comp 17
const North = (props) => {
  const [value, setValue] = useState('');
  function inputHander(inputText) {
    setValue(inputText);
  }
  props.setvalueR(value);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>North</Text>
      <TextInput onChangeText={inputHander} value={props.value} />
    </View>
  );
};

//Comp 18
const East = (props) => {
  const [value, setValue] = useState('');
  props.setvalueR(value);
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>East</Text>
      <TextInput onChangeText={setValue} value={props.value} />
    </View>
  );
};
//Default export
const NewPoint = ({navigation, route}) => {
  const current = useSelector((state) => state.CurrentProject);
  console.log(current, 'Selected Project');

  // const details = useSelector((state) => state.PointDetails);

  const [index, setIndex] = useState(
    useSelector((state) => state.CurrentIndex),
  );
  const [pointId, setpointId] = useState('B-01');
  const [drillingMethod, setdrillingMethod] = useState('---');
  const [drillingCrew, setdrillingCrew] = useState('');
  const [hammerType, sethammerType] = useState('---');
  const [loggedBy, setloggedBy] = useState('---');
  const [equipmentUsed, setequipmentUsed] = useState('');
  const [holeDepth, setholeDepth] = useState(0);
  const [augralRefusal, setaugralRefusal] = useState('');
  const [dateDrilled, setdateDrilled] = useState('');
  const [boringBegin, setboringBegin] = useState(new Date(0));
  const [boringEnd, setboringEnd] = useState(new Date(0));
  const [elevation, setelevation] = useState(0);
  const [station, setstation] = useState('');
  const [offset, setoffset] = useState('');
  const [boringLocation, setboringLocation] = useState('');
  const [weather, setweather] = useState('');
  const [waterDepth, setwaterDepth] = useState('');
  const [east, seteast] = useState('');
  const [north, setnorth] = useState('');
  const [editable, setEditable] = useState(false);
  //const [upd, setUpd] = useState(false);

  console.log(index, 'in new point Index');
  //-----------------
  const point = useSelector((state) => state.CurrentPoint);
  /*const [point, setPoint] = useState(
    useSelector((state) => state.CurrentPoint),
  );*/
  console.log(point, 'Selected Point');
  const [animating, setAnimating] = useState(true); //activity indicator

  function setaddeds() {
    setpointId(point.pointId);
    setdrillingMethod(point.drillingMethod);
    setdrillingCrew(point.drillingCrew);
    sethammerType(point.hammerType);
    setloggedBy(point.loggedBy);
    setequipmentUsed(point.equipmentUsed);
    setholeDepth(point.holeDepth);
    setaugralRefusal(point.augralRefusal);
    setdateDrilled(point.dateDrilled);
    setboringBegin(point.boringBegin);
    setboringEnd(point.boringEnd);
    setelevation(point.elevation);
    setstation(point.station);
    setoffset(point.offset);
    setboringLocation(point.boringLocation);
    setweather(point.weather);
    setwaterDepth(point.waterDepth);
    seteast(point.east);
    setnorth(point.north);
    // setUpd(true);
  }
  const [cPoint, setPoint] = useState([]);
  useEffect(() => {
    if (route.params !== undefined) {
      if (route.params.adding) {
        setEditable(true);
        setAnimating(false);
      }
    }
    if (point.projectNum === current) {
      setaddeds();
      setPoint(point);
      setAnimating(false);
    }

    //return () => console.log('onUnmount');
  }, [cPoint]);

  //------------------
  const [otherField, enableOther] = useState(false);
  let drillCrewOther = <DrillCrewOtherField check={otherField} />;

  const store = useStore();

  function saveToRedux() {
    checkValues();
    if (route.params !== undefined) {
      if (route.params.adding) {
        console.log('adding');
        add();
      }
    } else {
      console.log('update');
      update();
    }
    navigation.pop();
    //add();
  }
  function add() {
    console.log('add called');
    store.dispatch(
      addProject({
        projectNum: current,
        pointId: pointId,
        drillingMethod: drillingMethod,
        drillingCrew: drillingCrew,
        hammerType: hammerType,
        loggedBy: loggedBy,
        equipmentUsed: equipmentUsed,
        holeDepth: holeDepth,
        augralRefusal: augralRefusal,
        dateDrilled: dateDrilled,
        boringBegin: boringBegin,
        boringEnd: boringEnd,
        elevation: elevation,
        station: station,
        offset: offset,
        boringLocation: boringLocation,
        weather: weather,
        waterDepth: waterDepth,
        east: east,
        north: north,
      }),
    );
  }
  function update() {
    console.log('upate');
    store.dispatch(
      setCurrentPoint({
        projectNum: current,
        //pointId: pointId,
        drillingMethod: drillingMethod,
        drillingCrew: drillingCrew,
        hammerType: hammerType,
        loggedBy: loggedBy,
        equipmentUsed: equipmentUsed,
        holeDepth: holeDepth,
        augralRefusal: augralRefusal,
        dateDrilled: dateDrilled,
        boringBegin: boringBegin,
        boringEnd: boringEnd,
        elevation: elevation,
        station: station,
        offset: offset,
        boringLocation: boringLocation,
        weather: weather,
        waterDepth: waterDepth,
        east: east,
        north: north,
      }),
    );
    store.dispatch(
      updateProject(index, {
        projectNum: current,
        // pointId: pointId,
        drillingMethod: drillingMethod,
        drillingCrew: drillingCrew,
        hammerType: hammerType,
        loggedBy: loggedBy,
        equipmentUsed: equipmentUsed,
        holeDepth: holeDepth,
        augralRefusal: augralRefusal,
        dateDrilled: dateDrilled,
        boringBegin: boringBegin,
        boringEnd: boringEnd,
        elevation: elevation,
        station: station,
        offset: offset,
        boringLocation: boringLocation,
        weather: weather,
        waterDepth: waterDepth,
        east: east,
        north: north,
      }),
    );
  }
  function checkValues() {}

  // Timer
  setTimeout(() => {
    console.log('hello');
  }, 3000);
  return (
    <View style={styles.mainCont}>
      {animating ? (
        <ActivityModal animating={animating} />
      ) : (
        <ScrollView>
          <PointID
            //value={}
            setvalueR={(value) => setpointId(value)}
            value={pointId}
            editable={editable}
          />
          <CompWithModal
            name={'Drilling Method'}
            setvalueR={(value) => setdrillingMethod(value)}
            value={drillingMethod}
          />
          <DrillingCrew
            enableOther={enableOther}
            setvalueR={(value) => setdrillingCrew(value)}
            value={drillingCrew}
          />
          {drillCrewOther}
          <CompWithModal
            name={'Hammer Type'}
            setvalueR={(value) => sethammerType(value)}
            value={hammerType}
          />
          <CompWithModal
            name={'Logged By'}
            setvalueR={(value) => setloggedBy(value)}
            value={loggedBy}
          />
          <CompWithModal
            name={'Equipment Used'}
            setvalueR={(value) => setequipmentUsed(value)}
            value={equipmentUsed}
          />
          <HoleDepthandElevation
            name={'Hole Depth'}
            setvalueR={(value) => setholeDepth(value)}
            value={holeDepth}
          />
          <AugralRefusal
            setvalueR={(value) => setaugralRefusal(value)}
            value={augralRefusal}
          />
          <DateDrilled
            setvalueR={(value) => setdateDrilled(value)}
            value={dateDrilled}
          />
          <BoringTime
            name={'Boring Begin Time'}
            setvalueR={(value) => setboringBegin(value)}
            value={boringBegin}
          />
          <BoringTime
            name={'Boring End Time'}
            setValueR={(value) => setboringEnd(value)}
            value={boringEnd}
          />
          <HoleDepthandElevation
            name={'Elevation'}
            setvalueR={(value) => setelevation(value)}
            value={elevation}
          />
          <Station setvalueR={(value) => setstation(value)} value={station} />
          <Offset setvalueR={(value) => setoffset(value)} value={offset} />
          <BoringLocation
            setvalueR={(value) => setboringLocation(value)}
            value={boringLocation}
          />
          <Weather setvalueR={(value) => setweather(value)} value={weather} />
          <WaterDepth
            setvalueR={(value) => setwaterDepth(value)}
            value={waterDepth}
          />
          <North setvalueR={(value) => setnorth(value)} value={north} />
          <East setvalueR={(value) => seteast(value)} value={east} />
          <View style={styles.button}>
            <Button title="Save" onPress={saveToRedux} />
          </View>
        </ScrollView>
      )}
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
  AlertmodalView2: {
    backgroundColor: 'red',
    width: '100%',
    height: 25,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
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
