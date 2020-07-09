import React, {useState, useEffect} from 'react';
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
import {addProject, updateProject} from '../actions/SampleDetailsActions';
import {useStore, useSelector} from 'react-redux';

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

const Depth = (props) => {
  // const [value, setValue] = useState('0');

  function inputHander(inputText) {
    //setValue(inputText);
    props.storeVal(inputText);
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

const Length = (props) => {
  const [value, setValue] = useState('0');
  function inputHander(inputText) {
    //setValue(inputText);
    props.storeVal(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Length</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={props.value}
        maxLength={12}
      />
    </View>
  );
};

const SampleType = (props) => {
  // const [value, setValue] = useState('---');
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
  //props.storeVal(value);
  function setModalVis() {
    setCrewModalVisibility(!crewModalVisibility);
  }
  //console.log('Value' + value);

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Sample Type</Text>
      <TouchableOpacity onPress={setModalVis}>
        <View>
          <Text style={styles.DMText}>{props.value}</Text>
        </View>
      </TouchableOpacity>
      <ModalView
        options={options}
        modalVisibility={crewModalVisibility}
        setVis={setModalVis}
        //returnVal={selectedVal}
        returnVal={props.storeVal}
      />
    </View>
  );
};

const BlowsInch = (props) => {
  // const [value, setValue] = useState('');
  function inputHander(inputText) {
    //setValue(inputText);
    props.storeVal(inputText);
  }
  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>{props.name}</Text>
      <TextInput onChangeText={inputHander} value={props.value} />
    </View>
  );
};

const NValue = (props) => {
  //const [value, setValue] = useState('0');
  function inputHander(inputText) {
    //setValue(inputText);
    props.storeVal(inputText);
  }

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>N_Value</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={props.value}
        maxLength={12}
      />
    </View>
  );
};

const Qu = (props) => {
  // const [value, setValue] = useState('0');
  function inputHander(inputText) {
    //setValue(inputText);
    props.storeVal(inputText);
  }

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Qu</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={props.value}
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
    props.storeVal(date);
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

const Recovery = (props) => {
  // const [value, setValue] = useState('0');
  function inputHander(inputText) {
    //setValue(inputText);
    props.storeVal(inputText);
  }

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>Recovery</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={props.value}
        maxLength={12}
      />
    </View>
  );
};

const RQD = (props) => {
  // const [value, setValue] = useState('0');
  function inputHander(inputText) {
    //setValue(inputText);
    props.storeVal(inputText);
  }

  return (
    <View style={styles.DMView}>
      <Text style={styles.DMText}>RQD</Text>
      <TextInput
        keyboardType="number-pad"
        onChangeText={inputHander}
        value={props.value}
        maxLength={12}
      />
    </View>
  );
};
const NewSample = ({navigation, route}) => {
  const [currentIndex, setCurrentIndex] = useState(
    useSelector((state) => state.CurrentIndex),
  );
  const [depth, setdepth] = useState('0');
  const [length, setlength] = useState('0');
  const [sampletype, setsampletype] = useState('---');
  const [blow1, setblow1] = useState('');
  const [blow2, setblow2] = useState('');
  const [blow3, setblow3] = useState('');
  const [blow4, setblow4] = useState('');
  const [nq, setnq] = useState('0');
  const [qu, setqu] = useState('0');
  const [begintime, setbegintime] = useState(new Date(0));
  const [endtime, setendtime] = useState(new Date(0));
  const [recovery, setrecovery] = useState('0');
  const [rqd, setrqd] = useState('0');
  const [upd, setUpd] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (route.params !== undefined) {
      // console.log(route.params.project, 'current sample ');
      setdepth(route.params.project.depth);
      setlength(route.params.project.length);
      setsampletype(route.params.project.sampletype);
      setblow1(route.params.project.blow1);
      setblow2(route.params.project.blow2);
      setblow3(route.params.project.blow3);
      setblow4(route.params.project.blow4);
      setnq(route.params.project.nq);
      setqu(route.params.project.qu);
      setbegintime(route.params.project.begintime);
      setendtime(route.params.project.endtime);
      setrecovery(route.params.project.recovery);
      setrqd(route.params.project.rqd);
      setIndex(route.params.index);
      setUpd(true);
    }
  }, []);

  function updateProjectValue() {
    store.dispatch(
      updateProject(index, {
        projectNum: currentProject,
        // pointNum: currentPoint,
        depth: depth,
        length: length,
        sampletype: sampletype,
        blow1: blow1,
        blow2: blow2,
        blow3: blow3,
        blow4: blow4,
        nq: nq,
        qu: qu,
        begintime: begintime,
        endtime: endtime,
        recovery: recovery,
        rqd: rqd,
      }),
    );
  }

  const store = useStore();
  function onSaveData() {
    if (upd) {
      updateProjectValue();
    } else {
      console.log(currentIndex, 'sample index');
      store.dispatch(
        addProject({
          projectNum: currentProject,
          pointNum: currentPoint,
          //pointNum: currentIndex,
          depth: depth,
          length: length,
          sampletype: sampletype,
          blow1: blow1,
          blow2: blow2,
          blow3: blow3,
          blow4: blow4,
          nq: nq,
          qu: qu,
          begintime: begintime,
          endtime: endtime,
          recovery: recovery,
          rqd: rqd,
        }),
      );
    }
    navigation.pop();
  }

  const currentPoint = useSelector((state) => state.CurrentPoint.pointId);
  const currentProject = useSelector((state) => state.CurrentProject);
  return (
    <View style={styles.mainCont}>
      <ScrollView>
        <Depth value={depth} storeVal={(value) => setdepth(value)} />
        <Length value={length} storeVal={(value) => setlength(value)} />
        <SampleType
          value={sampletype}
          storeVal={(value) => setsampletype(value)}
        />
        <BlowsInch
          name={'Blows 1st 6in'}
          value={blow1}
          storeVal={(value) => setblow1(value)}
        />
        <BlowsInch
          name={'Blows 2nd 6in'}
          value={blow2}
          storeVal={(value) => setblow2(value)}
        />
        <BlowsInch
          name={'Blows 3rd 6in'}
          value={blow3}
          storeVal={(value) => setblow3(value)}
        />
        <BlowsInch
          name={'Blows 4th 6in'}
          value={blow4}
          storeVal={(value) => setblow4(value)}
        />
        <NValue value={nq} storeVal={(value) => setnq(value)} />
        <Qu value={qu} storeVal={(value) => setqu(value)} />
        <TimeCore
          name={'Begin Time Core'}
          value={begintime}
          storeVal={(value) => setbegintime(value)}
        />
        <TimeCore
          name={'End Time Core'}
          value={endtime}
          storeVal={(value) => setendtime(value)}
        />
        <Recovery value={recovery} storeVal={(value) => setrecovery(value)} />
        <RQD value={rqd} storeVal={(value) => setrqd(value)} />
        <View style={styles.button}>
          <Button title="Save" onPress={onSaveData} />
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
