import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {data, setFetchAPi, setFetchAPi2, setName} from '../actions/actions';

const NameDemo = () => {
  const [inputName, setInputName] = useState('');
  const dispatch = useDispatch();
  const stateData = useSelector(state => state.Reducers);

  console.log('Inside NameDemo---------');
  console.log('stateData.FetchAPIData------', stateData.FetchAPIData);

  const handleNameChange = text => {
    setInputName(text);
  };

  const handleNameSubmit = () => {
    // Dispatch the setName action with the inputName as payload
    dispatch(setName(inputName));
  };

  const FetchAPI = () => {
    // dispatch(setFetchAPi2())
    // const abc = await setFetchAPi();
    // console.log('setFetchAPi()', await setFetchAPi());
    // dispatch({type: abc?.type, value: abc?.value});
    dispatch(setFetchAPi());
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>ID: {item.id}</Text>
        <Text style={styles.lightText}>Title: {item.title}</Text>
        <Text style={styles.lightText}>Price: {item.price}</Text>
        <Text style={styles.lightText}>Brand: {item.brand}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, padding: 20}}>
      <Text>Name Demo</Text>
      <Text>Name: {stateData.name}</Text>
      <TextInput
        placeholder="Enter a name"
        value={inputName}
        onChangeText={handleNameChange}
      />
      <TouchableOpacity style={styles.TouchBtn} onPress={handleNameSubmit}>
        <Text style={styles.TouchBtnText}>Set Name</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TouchBtn} onPress={FetchAPI}>
        <Text style={styles.TouchBtnText}>Fetch API</Text>
      </TouchableOpacity>

      <FlatList
        data={stateData.FetchAPIData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = new StyleSheet.create({
  TouchBtn: {
    borderWidth: 1,
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  TouchBtnText: {color: 'white'},
});

export default NameDemo;
