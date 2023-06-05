import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function BlogContent({ route }) {
  const { blog } = route.params;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.author}>
        <Image
          style={styles.dp}
          source={require("../../assets/favicon.png")}
          resizeMode="contain"
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{blog.username}</Text>
        </View>
        <View style={styles.timestampContainer}>
          <Text style={styles.timestamp}>{blog.timestamp}</Text>
        </View>
      </View>
      <Text style={styles.title}>{blog.title}</Text>
      <Text style={styles.content}>{blog.content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    padding: 8,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 15,
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
    marginBottom: 10,
  },
  nameContainer: {
    flex: 1,
  },
  timestampContainer: {
    marginLeft: 'auto',
  },
  content: {
    fontSize: 20,
  }
});
