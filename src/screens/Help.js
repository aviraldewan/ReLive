import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import {useState} from 'react';
import TalkasSaviour from '../components/TalkasSaviour';
import SpecialButton from '../components/SpecialButton';

export default function Help() {

  const [message, setMessage] = useState();
  const changeMessageHandler = (text)=> {
    if (text !== null)
      setMessage(text)
    else 
      Alert.alert("Alert", "You can't send empty message.");
  }
  
  return (
    <View style={styles.container}>
      <TextInput
         style={styles.chatBox}
         value={message}
         onChangeText={changeMessageHandler}
         />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatBox: {
    width: '80%',
    height: 40,
    backgroundColor: 'blue',
  }
});
