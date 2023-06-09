import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PostCreater from './PostCreater';

export default function Comment({ comment }) {

    console.log(comment);

  return (
    <View style={styles.container}>
        <PostCreater post={{dp: comment.dp, username: comment.username, timestamp: comment.timestamp}} type='full' />
        <Text>{comment.content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 12,
    borderRadius: 10,
    borderColor: 'dodgerblue',
    borderWidth: 1,
  },
});
