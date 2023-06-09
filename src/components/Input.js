import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SpecialButton from './SpecialButton';
import blogs from '../dummy/blog';
import posts from '../dummy/posts';

export default function Input({ navigation, route, type }) {

  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const contentPlaceholder = `Write your ${type} post...`;
  const titlePlaceholder = `Enter title for ${type} post...`;

  const postHandler = (text) => {
    if (text.trim().length > 20000 && (type === 'Blog' || type === 'Fundraiser')) {
      alert('Max 20000 characters are allowed');
      return;
    }
    else if (text.trim().length > 600 && (type === 'Community' || type === 'Comment'))
    {
        alert('Max 600 characters are allowed');
        return;
    }
    setPost(text);
  };

  const titleHandler = (text) => {
    if (text.trim().length > 200) {
      alert('Max 200 characters are allowed for title.');
      return;
    }
    setTitle(text);
  };

  const selectImages = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to select images.');
      return;
    }
  
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
        multiple: true,
      });
  
      if (!result.cancelled) {
        setImages(result.uri);
      }
    } catch (error) {
      console.log('Error picking images:', error);
    }
  };
  

  const submitPost = () => {
    if ((type === 'Blog' || type === 'Fundraiser') && title.trim() === '') {
      alert('Please enter a valid title.');
      return;
    }

    if (post.trim() === '' && images.length === 0) {
      alert(`Please enter a valid ${type} post.`);
      return;
    }

    setPost('');
    setTitle('');
    setImages([]);

    if (type === 'Blog') {
      blogs.push({
        user_id: 20,
        username: 'testing',
        dp: '../../assets/favicon.png',
        title: title,
        content: post,
        timestamp: '05/06/23',
      });
    } else if (type === 'Fundraiser') {
      // Implement logic for fundraiser post
      return;
    } else if (type === 'Community') {
      posts.push({
        user_id: 9,
        dp: '../../assets/favicon.png',
        username: 'uvhbjn',
        content: post,
        image: images,
        timestamp: '06/06/23',
        likes: [],
        comments: [],
        shares: 456789,
      });
    } else if (type === 'Comment') {
      alert(`Your comment is ${post}`);
    }

    if (type === 'Community') type += 'Post';
    alert(`Your ${type} is posted!`);

    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {type !== 'Comment' ? (
        <TextInput
          style={styles.titleContainer}
          value={title}
          placeholder={titlePlaceholder}
          onChangeText={titleHandler}
          multiline={true}
          scrollEnabled={true}
        />
      ) : null}
      <TextInput
        style={styles.post}
        value={post}
        placeholder={contentPlaceholder}
        onChangeText={postHandler}
        multiline={true}
        scrollEnabled={true}
      />
      {type === 'Fundraiser' || type === 'Community' ? (
        <View>
        <SpecialButton title="Select Images" pressFunction={selectImages} />
        {images.map((imageUri) => (
          <Image key={imageUri} source={{ uri: imageUri }} style={styles.image} />
        ))}
      </View>      
      ) : null}
      <View style={styles.postBtn}>
        <SpecialButton title="Post" pressFunction={submitPost} color="dodgerblue" />
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
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
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
