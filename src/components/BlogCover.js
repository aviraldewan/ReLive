import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import BlogContent from './BlogContent';

export default function BlogCover({ blog, navigation }) {

  const openBlog = () => {
    navigation.navigate('BlogContent', {blog});
  }

  return (
    <TouchableOpacity style={styles.container} onPress={openBlog}>
      <View style={styles.author}>
        <Image
          style={styles.dp}
          source={require("../../assets/favicon.png")}
          resizeMode="contain"
        />
        <Text style={styles.name}>{blog.username}</Text>
      </View>
      <Text style={styles.title} numberOfLines={3}>{blog.title}</Text>
      <Text style={styles.timestamp}>{blog.timestamp}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
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
    marginRight: 10,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBelow: 5,
  },
});
