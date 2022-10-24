import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Otp = ({setConfig,setPhone}) => {
  
const handleSubmit = () => {
    setConfig(true)
}

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20, marginBottom: 20, color: 'white'}}>
        Enter Phone Number
      </Text>
      <TextInput
        placeholder="Enter Your Number."
        keyboardType="number-pad"
        placeholderTextColor={"gray"}
        style={{
          width: '70%',
          height: 50,
          backgroundColor: '#f1f1f1',
          borderRadius: 5,
          padding: 5,
          color:'#000'
        }}
        defaultValue='+91'
        onChangeText={number => setPhone(number)}
      />
      <TouchableOpacity style={styles.btn} activeOpacity={0.5}onPress={handleSubmit}>
        <Text style={styles.btn_text}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Otp;

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
    color:'#000'
  },
});
