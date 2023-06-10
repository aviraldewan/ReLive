import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function PostCreater({ post, type, onPress, fundraise }) {
  return (
    <>
      <View style={styles.author}>
        <Image
          style={styles.dp}
          source={require('../../assets/favicon.png')}
          resizeMode="contain"
        />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{post.username}</Text>
        </View>
        <View style={styles.timestampContainer}>
          <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
      </View>
      {fundraise ? 
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{post.title}</Text>
        </TouchableOpacity>
        : null
    }
      {type === 'full' ? (
        <View style={styles.content}>
          <Text>{post.content}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <Text numberOfLines={3} style={styles.content}>
            {post.content}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestamp: {
    color: 'grey',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 15,
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
    marginBottom: 5,
  },
  nameContainer: {
    flex: 1,
  },
  timestampContainer: {
    marginLeft: 'auto',
  },
  content: {
    fontSize: 16,
  },
});
