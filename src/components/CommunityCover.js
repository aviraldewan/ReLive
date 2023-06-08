import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import CommunityContent from './CommunityContent';

export default function CommunityCover({ post, navigation }) {
  const openPost = () => {
    navigation.navigate('CommunityContent', { post });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={openPost}>
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
      <Text numberOfLines={3} style={styles.content}>
        {post.content}
      </Text>
      <View style={styles.imageContainer}>
        {   (post.image.length ? 
            post.image.map((image, index) => (
            <Image key={index} source={image} style={styles.image} resizeMode="cover" />
            ))
        : <></> )
        }
      </View>
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
    fontSize: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
});
