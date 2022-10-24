import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const Verify = ({phone}) => {
    const navigation = useNavigation()
  useEffect(() => {
    auth()
      .signInWithPhoneNumber(phone)
      .then(confirm => {
        if(!confirm) alert('Error')
        setRes(confirm);
      })
      .catch(err => console.log(err));
  }, []);
  const [code, setCode] = useState('');
  const [res, setRes] = useState(null);

  const handleVerify = async () => {
    res
      .confirm(code)
      .then(ress => {
        navigation.navigate('Home');
      })
      .catch(err => alert(err));
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginBottom: 20, color: 'white'}}>
        Enter code here.
      </Text>
      <TextInput
        placeholder="Enter Your Number."
        placeholderTextColor={'black'}
        keyboardType="number-pad"
        style={{
          width: '70%',
          height: 50,
          backgroundColor: '#f1f1f1',
          borderRadius: 5,
          padding: 5,
          color: '#000',
        }}
        onChangeText={code => setCode(code)}
      />
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
        onPress={handleVerify}>
        <Text style={styles.btn_text}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30336b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 300,
    height: 45,
    backgroundColor: '#fff',
    marginTop: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    color: '#000',
  },
});
