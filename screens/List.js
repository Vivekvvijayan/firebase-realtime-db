import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const itemRef = database().ref('/data');

const List = () => {
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    database()
      .ref('/data')
      .on('value', snapShot => {
        let i = snapShot.val();
        i !== null ? setKeys(Object.keys(i)) : '';
        let items = i !== null ? Object.values(i) : [];

        if (items.length === 0) {
          setLoader(false);
        }

        setData(items);

        setLoader(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.head}>List</Text>

      <View style={styles.itemsContainer}>
        <ActivityIndicator color={'white'} animating={loader} />
        {data.length > 0 ? (
          data.map((item, index) => (
            <Dataelement item={item} index={index} keys={keys} key={index} />
          ))
        ) : (
          <Text style={{fontSize: 25, textAlign: 'center'}}>Empty</Text>
        )}
      </View>
    </View>
  );
};

const Dataelement = ({item, index, keys}) => {
  const navigation = useNavigation();
  // delete a list items
  const handleDelete = index => {
    let childKey = keys[index];
    itemRef.child(childKey).remove();
  };

  return (
    <View style={styles.itemMainContainer}>
      <Text style={styles.data}>
        {' '}
        {index + 1}. {item}
      </Text>
      <View style={styles.itemBtnContainer}>
        <TouchableOpacity
          style={styles.itemBtnTwo}
          onPress={() =>
            navigation.navigate('Edit Item', {updateIndex: index, keys, item})
          }>
          <Text style={{color: '#555'}}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemBtnOne}
          onPress={() => handleDelete(index)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30336b',
    display: 'flex',
  },
  head: {
    textAlign: 'center',
    marginTop: 15,
    fontSize: 24,
  },
  itemsContainer: {
    width: '100%',
    padding: 15,
    height: 'auto',
  },
  listItemsText: {
    paddingTop: 10,
    fontSize: 15,
  },
  itemMainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    padding: 15,
    height: 'auto',
  },
  itemBtnOne: {
    width: 70,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 10,
  },
  itemBtnTwo: {
    width: 70,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  itemBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '45%',
  },
  data: {
    maxWidth: '50%',
    textAlign: 'justify',
    padding: 1,
  },
});

export default List;
