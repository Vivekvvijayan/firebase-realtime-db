import {StyleSheet, Text, View,TextInput, TouchableOpacity} from 'react-native';
import React,{ useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';


const Signup = () => {

    const navigation = useNavigation();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const handleSignup = () => {
            auth().createUserWithEmailAndPassword(email,password).then((res) => {
                alert('user registed')
                navigation.navigate('login')
            }).catch(err=> {
                console.log(err);
            })
    }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#30336b',
        justifyContent:'center',
        alignItems:'center'
      }}>
        <Text style={{ fontSize:25,marginBottom:30}}>Signup now</Text>
        <TextInput 
            placeholder="Enter Email.."
            style={styles.textInputStyle}
            textContentType="emailAddress"
            placeholderTextColor='gray'
            onChangeText={(text) => setEmail(text)}
        />
        <TextInput 
            placeholder="Enter Passsword"
            style={styles.textInputStyle}
            secureTextEntry={true}
            placeholderTextColor='gray'
            onChangeText={(password) => setPassword(password)}
        />
        <TouchableOpacity style={styles.btn} onPress={handleSignup}>
            <Text style={styles.btn_text}>Signup Now</Text>

        </TouchableOpacity>
        <TouchableOpacity style={styles.btnLogin} onPress={()=>navigation.navigate('login')}>
            <Text style={styles.btn_text}>Login</Text>

        </TouchableOpacity>
      </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
    textInputStyle:{
        width:300,
        height:50,
        backgroundColor:'#f1f1f1',
        marginBottom:20,
        padding:10,
        borderRadius:10,
        color:'#010101'
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
      btnLogin:{
        width: 300,
        height: 45,
        backgroundColor: 'skyblue',
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btn_text: {
        color: '#010101',
        fontSize: 18,
      },
});
