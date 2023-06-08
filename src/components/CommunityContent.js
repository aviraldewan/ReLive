import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ImageCarousel from './ImageCarousel';
import PostIcons from './PostIcons';
import PostCreater from './PostCreater';

export default function CommunityContent({ route }) {
  const { post } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <PostCreater post={post} type='full' />
      {post.image.length ? 
        <ImageCarousel post={post} />
       : <View></View> }
       <PostIcons post={post} type='full' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 12,
    borderRadius: 10,
  },
});
