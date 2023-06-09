import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import Comment from './Comment';

export default function PostComments({ comments }) {
  const renderComment = ({ item }) => {
    return <Comment comment={item} />;
  };

  const window = useWindowDimensions();
  const commentSectionHeight = window.height - 250; // Adjust the value as per your requirement

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Comments</Text>
      <View style={[styles.comments, { maxHeight: commentSectionHeight }]}>
        {comments.length === 0 ? (
          <Text style={styles.noComments}>Be the first to comment!</Text>
        ) : (
          <FlatList
            data={comments}
            renderItem={renderComment}
            keyExtractor={(comment) => comment.user_id.toString()}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 20,
  },
  noComments: {
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  comments: {
    marginLeft: 10,
    // marginBottom: 100, // Adjust the value to give extra padding at the bottom
  },
});
