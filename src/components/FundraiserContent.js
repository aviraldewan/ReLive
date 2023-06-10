import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ImageCarousel from './ImageCarousel';
import PostIcons from './PostIcons';
import PostCreater from './PostCreater';
import PostComments from './PostComments';
import SpecialButton from './SpecialButton';

export default function FundraiserContent({ route, navigation }) {
  const { fundraiser } = route.params;
  console.log(fundraiser);

  const Donate = () => {
    alert('Donation Successful');
  }

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <ScrollView contentContainerStyle={styles.postContent}>
          <View style={styles.containerSeperator}>
          <PostCreater post={fundraiser} type='full' fundraise={true} />
          <SpecialButton title='Donate' pressFunction={Donate} color='dodgerblue' />
          {fundraiser.image && fundraiser.image.length ? <ImageCarousel post={fundraiser} /> : null}
          <PostIcons post={fundraiser} type='full' />
          </View>
      <View style={styles.commentsContainer}>
        <PostComments comments={fundraiser.comments} navigation={navigation} />
      </View>
      </ScrollView>
      </View>
    </View>
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