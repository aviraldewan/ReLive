import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import SpecialButton from './SpecialButton';
import blogs from '../dummy/blog';

export default function BlogPost({navigation}) {
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');

  const postHandler = (text) => {

    if (text.length > 20000)
    {
      alert('Max 20000 characters are allowed for blog');
      return;
    }

    setPost(text);
  };

  const titleHandler = (text) => {
   
    if (text.length > 200)
    {
        alert('Max 200 characters are allowed for title.');
        return;
    }
    setTitle(text);
 }

    const submitBlog = () => {

    if (title.trim() === '') {
        alert('Please enter a valid title.');
        return;
    }

    if (post.trim() === '') {
      alert('Please enter a valid blog post.');
      return;
    }

    setPost('');
    setTitle('');
    blogs.push({
        user_id: 20,
        username: "testing",
        dp: '../../assets/favicon.png',
        title: title,
        content: post,
        timestamp: "05/06/23",
    });

    alert(`Your blog is posted!`);
    navigation.goBack();

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput
        style={styles.titleContainer}
        value={title} 
        placeholder='Enter title of blog...'
        onChangeText={titleHandler}
        multiline={true}
        scrollEnabled={true}
         />
      <TextInput
        style={styles.post}
        value={post}
        placeholder='Write your blog...'
        onChangeText={postHandler}
        multiline={true}
        scrollEnabled={true}
      />
      <View style={styles.postBtn}>
        <SpecialButton title='Post' pressFunction={submitBlog} color='dodgerblue' />
      </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '5%',
  },
  titleContainer: {
    width: '70%',
    marginBottom: 20, 
    padding: '2%',
    borderWidth: 1,
    borderRadius: 10, 
    borderColor: 'black',
  },
  post: {
    width: '70%',
    height: '50%',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'black',
    padding: '2%',
  },
    postBtn: {
    marginTop: '5%',
  },
});