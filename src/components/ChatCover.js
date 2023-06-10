import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BlogContent from './BlogContent';

export default function ChatCover({ blog, navigation }) {

  const openChat = () => {
    navigation.navigate('ChatContent', {chat});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={openChat}>
      <View style={styles.author}>
        <Image
          style={styles.dp}
          source={require("../../assets/favicon.png")}
          resizeMode="contain"
        />
        <Text style={styles.name}>{chat.name}</Text>
      </View>
      <Text style={styles.title} numberOfLines={1}>{chat.lastMsg}</Text>
      <Text style={styles.timestamp}>{chat.lastMsgTime}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'dodgerblue',
    margin: 10,
    padding: 12,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    alignSelf: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  timestamp: {
    color: 'grey',
  },
  dp: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderColor: 'dodgerblue',
    borderWidth: 1,
    marginRight: 10,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBelow: 5,
  },
});
