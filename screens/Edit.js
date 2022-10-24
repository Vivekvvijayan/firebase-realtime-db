import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

import React, {useState} from 'react';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';
const dbRef = database().ref('/data');

const Edit = ({route}) => {
  const navigation = useNavigation();
  const {updateIndex, keys, item} = route.params;

  const [newText, setNewText] = useState('');

  const handleUpdate = () => {
    const updationChild = keys[updateIndex];
    dbRef.child(updationChild).set(newText);
    alert('Updation Successfull.');
    navigation.navigate('List');
  };

  return (
    <View style={styles.container}>
      <Text style={{marginTop: 30, fontSize: 20}}>Edit Your Text</Text>

      <TextInput
        style={styles.textInput}
        placeholderTextColor={'gray'}
        editable={false}
        value={item}
      />
      <TextInput
        placeholder="Enter New value..."
        style={styles.textInput}
        placeholderTextColor={'gray'}
        onChangeText={t => {
          setNewText(t);
        }}
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
        onPress={handleUpdate}>
        <Text style={styles.btn_text}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Edit;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30336b',
    display: 'flex',

    alignItems: 'center',
  },
  textInput: {
    width: 240,
    height: 50,
    backgroundColor: '#f0f0f0',
    color: 'gray',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  btn: {
    width: 230,
    height: 50,
    backgroundColor: '#fff',
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    color: '#010101',
    fontSize: 18,
  },
});
