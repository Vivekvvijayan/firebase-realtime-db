import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import AddItems from './screens/AddItems';
import List from './screens/List';
import Edit from './screens/Edit';
import Signup from './screens/Signup';
import Login from './screens/Login';
import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import Icons from 'react-native-vector-icons/MaterialIcons';
import Otp from './screens/Otp';
import Verify from './screens/Verify';
import MobileVerify from './screens/MobileVerify';

const App = () => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    // auth().onAuthStateChanged(user => {
    //   if (!user) setLogged(false);
    //   else {
    //     setLogged(true);
    //   }
    // });
  }, [logged]);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        setLogged(false);
        alert('Logout successfull..');
      });
  };
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName={logged ? 'Home' : 'login'}
        screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {backgroundColor: '#30336a', elevation: 1},
          // headerRight: () =>
          //   logged ? (
          //     <Icons
          //       name="logout"
          //       size={30}
          //       style={{marginRight: 15}}
          //       onPress={handleLogout}
          //     />
          //   ) : (
          //     ''
          //   ),
        }}>

       
      
        <Stack.Screen name="Mobile" component={MobileVerify} options={{headerShown:false}}/>
        <Stack.Screen name="Add Items" component={AddItems} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Edit Item" component={Edit} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
