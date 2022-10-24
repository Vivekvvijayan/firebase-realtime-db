import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';
import {useState} from 'react';
const AddItems = () => {
  const [item, setItem] = useState('');

  const addData = () => {
    if (item != '') {
      database().ref('/data').push(item);
      alert('Data Added Successfully');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Items here</Text>
      <TextInput
        placeholder="Add Items Here..."
        style={styles.textInput}
        placeholderTextColor={'gray'}
        onChangeText={text => setItem(text)}
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
        onPress={addData}>
        <Text style={styles.btn_text}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30336b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 300,
    height: 60,
    backgroundColor: '#fff',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    color: '#010101',
    fontSize: 18,
  },
  textInput: {
    width: 300,
    height: 60,
    backgroundColor: '#f0f0f0',
    color: 'gray',
    padding: 10,
    borderRadius: 10,
  },
  heading: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default AddItems;
