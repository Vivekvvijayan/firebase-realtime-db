import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React,{ useState } from 'react'
import auth from '@react-native-firebase/auth'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()
    const [email,setEmail] = useState('')
    const [passsword,setPassword] = useState('')

    const handleLogin = () => {
        auth().signInWithEmailAndPassword(email,passsword).then((user) => {
               if(user) navigation.navigate('Home')
        }).catch(err=>{
                alert(err.message)
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
      <Text style={{ fontSize:25,marginBottom:30}}>Login Now</Text>
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
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btn_text}>Login</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSignup} onPress={() =>navigation.navigate('signup')}>
          <Text style={styles.btn_text}>Signup</Text>

      </TouchableOpacity>
    </View>
  )
}

export default Login

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
        backgroundColor: 'skyblue',
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnSignup:{
        width: 300,
        height: 45,
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
})