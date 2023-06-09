import React, { useState } from 'react';
import { FlatList, View, Text, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import Comment from './Comment';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PostComments({ comments }) {
  const renderComment = ({ item }) => {
    return <Comment comment={item} />;
  };

  const createComment = () => {
    return;
  }

  const window = useWindowDimensions();
  const commentSectionHeight = window.height - 250; // Adjust the value as per your requirement

  return (
    <View style={styles.container}>
      <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.heading}>Comments</Text>
        <TouchableOpacity style={{ marginRight: 10 }} onPress={createComment}>
          <View style={styles.addComment}>
            <Ionicons name="add" size={24} color="dodgerblue" />
          </View>
        </TouchableOpacity>
      </View>
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
    marginLeft: 10,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 30,
  },
  noComments: {
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  comments: {
    marginLeft: 10,
  },
  addComment: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'dodgerblue',
  },
});
