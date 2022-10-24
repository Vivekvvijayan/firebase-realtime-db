import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('Add Items');
        }}>
        <Text style={styles.btn_text}>Add Items</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
        onPress={() => {
          navigation.navigate('List');
        }}>
        <Text style={styles.btn_text}>List</Text>
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
});

export default Home;
