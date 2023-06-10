import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostCreater from './PostCreater';
import PostIcons from './PostIcons';

export default function FundraiserCover({ fundraiser, navigation }) {
  const openFundraiser = () => {
    navigation.navigate('FundraiserContent', { fundraiser });
  };

  return (
    <View style={styles.container}>
      <PostCreater post={fundraiser} type='cover' fundraise={true} onPress={openFundraiser} />
      {fundraiser.image.length ? <ImageCarousel post={fundraiser} /> : null}
      <PostIcons post={fundraiser} type='cover' onPress={openFundraiser} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'dodgerblue',
    margin: 10,
    padding: 12,
    borderRadius: 10,
  },
});  