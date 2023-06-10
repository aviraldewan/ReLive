import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageCarousel from './ImageCarousel';
import PostIcons from './PostIcons';
import PostCreater from './PostCreater';
import PostComments from './PostComments';

export default function CommunityContent({ route, navigation }) {
  const { post } = route.params;
  // console.log(post.comments);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <View style={styles.containerSeperator}>
          <PostCreater post={post} type='full' />
          {post.image.length ? <ImageCarousel post={post} /> : null}
          <PostIcons post={post} type='full' />
        </View>
        <View style={styles.commentsContainer}>
          <PostComments comments={post.comments} navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSeperator: {
    borderBottomWidth: 1,
    borderBottomColor: 'dodgerblue',
  },
  postContainer: {
    padding: 10,
  },
  commentsContainer: {
    flex: 1,
    padding: 10,
  },
});
