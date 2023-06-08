import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {useState} from 'react';
import ImageCarousel from './ImageCarousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostCreater from './PostCreater';
import PostIcons from './PostIcons';

export default function CommunityCover({ post, navigation }) {

  const openPost = () => {
    navigation.navigate('CommunityContent', { post });
  };

  return (

    <View style={styles.container} >
      <PostCreater post={post} type='cover' onPress={openPost} />
      {post.image.length ? 
        <ImageCarousel post={post} />
       : <View></View> }
       <PostIcons post={post} type='cover' onPress={openPost} />
    </View>
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
});
