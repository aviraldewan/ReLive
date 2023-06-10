import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function ChatContent({ route }) {
  const { chat } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.author}>
        <Image
          style={styles.dp}
          source={require("../../assets/favicon.png")}
          resizeMode="contain"
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{chat.username}</Text>
        </View>
        <View style={styles.timestampContainer}>
          <Text style={styles.timestamp}>{chat.timestamp}</Text>
        </View>
      </View>
        <Text style={styles.title}>{chat.title}</Text>
      <Text style={styles.content}>{chat.content}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    margin: 10,
    padding: 8,
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
    borderColor: 'dodgerblue',
    borderWidth: 1,
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
    fontSize: 18,
  }
});
