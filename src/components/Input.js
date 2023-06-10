import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, Image, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import SpecialButton from './SpecialButton';
import NumericInput from './NumbericInput';
import blogs from '../dummy/blog';
import posts from '../dummy/posts';
import fundraiser from '../dummy/fundraiser';
import FundraiserDocuments from './FundraiserDocuments';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Input({ navigation, route, type }) {
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  const [images, setImages] = useState([]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [value, setValue] = useState('');

  const handleTextChange = (text) => {
    const numericValue = text.replace(/[^0-9]/g, '');

    if (numericValue !== '' && numericValue <= 0) {
      alert('Fundraising amount must be more than 0');
      return;
    }

    setValue(numericValue);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date.toISOString().split('T')[0]);
    hideDatePicker();
  };

  const contentPlaceholder = `Write your ${type} post...`;
  const titlePlaceholder = `Enter title for ${type} post...`;

  const postHandler = (text) => {
    if (text.trim().length > 20000 && (type === 'Blog' || type === 'Fundraiser')) {
      alert('Max 20000 characters are allowed');
      return;
    } else if (text.trim().length > 600 && (type === 'Community' || type === 'Comment')) {
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
        allowsMultipleSelection: true,
        quality: 1,
      });

      if (!result.cancelled && result.assets.length > 0) {
        const selectedImages = result.assets.map((asset) => asset.uri);
        setImages(selectedImages);
      }
    } catch (error) {
      console.log('Error picking images:', error);
      alert('Error in picking images. Please try again');
    }
  };

  const submitPost = () => {
    if (!value && type === 'Fundraiser') {
      alert('Please enter a valid amount');
      return;
    }

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
      fundraiser.push({
        shares: 24,
        likes: [],
        user_id: 2,
        title: title,
        content: post,
        goal_amt: value,
        curr_amt: 200,
        timestamp: '09/06/23',
        username: 'testing',
        dp: '',
        image: images,
        donations: [],
        end: selectedDate,
        comments: [],
      });
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

    if (type === 'Community') type += ' Post';
    alert(`Your ${type} is posted!`);

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {type === 'Fundraiser' ? (
          <>
            <TextInput
              style={styles.goal_amt}
              value={value}
              placeholder="Enter Goal Amount (in Rs)"
              onChangeText={handleTextChange}
              keyboardType="numeric"
            />
            <SpecialButton
              title="Select Date"
              pressFunction={showDatePicker}
              color="dodgerblue"
            />
            <Text>{selectedDate}</Text>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </>
        ) : null}

        {(type === 'Fundraiser' || type === 'Blog') ? (
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
          <>
            <SpecialButton
              title="Select Images"
              pressFunction={selectImages}
            />
            {images.length ? (
              <View style={styles.imageContainer}>
                {images.map((imageUri) => (
                  <Image
                    key={imageUri}
                    style={styles.image}
                    source={{ uri: imageUri }}
                  />
                ))}
              </View>
            ) : null}
          </>
        ) : null}
      </ScrollView>
      <View style={styles.postBtn}>
        <SpecialButton
          title="Post"
          pressFunction={submitPost}
          color="dodgerblue"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '5%',
  },
  scrollView: {
    width: '100%',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  goal_amt: {
    height: 40,
    borderColor: 'dodgerblue',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '70%',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderColor: 'dodgerblue',
    borderWidth: 1,
  },
  titleContainer: {
    width: '70%',
    marginBottom: 20,
    padding: '2%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'dodgerblue',
  },
  post: {
    width: '70%',
    height: 400,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'dodgerblue',
    padding: '2%',
  },
  postBtn: {
    marginTop: '5%',
  },
  datePicker: {
    width: '70%',
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    overflow: 'hidden',
  },
});
