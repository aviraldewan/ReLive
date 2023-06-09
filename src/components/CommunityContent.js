import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageCarousel from './ImageCarousel';
import PostIcons from './PostIcons';
import PostCreater from './PostCreater';
import PostComments from './PostComments';

export default function CommunityContent({ route }) {
  const { post } = route.params;
  console.log(post.comments);

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <ScrollView contentContainerStyle={styles.postContent}>
          <PostCreater post={post} type='full' />
          {post.image.length ? <ImageCarousel post={post} /> : null}
          <PostIcons post={post} type='full' />
        </ScrollView>
      </View>
      <View style={styles.commentsContainer}>
        <PostComments comments={post.comments} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'dodgerblue',
    padding: 10,
    flexGrow: 0,
    flexShrink: 1,
  },
  postContent: {
    paddingBottom: 10,
  },
  commentsContainer: {
    flex: 1,
    padding: 10,
  },
});