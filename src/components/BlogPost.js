import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import Input from './Input';

export default function BlogPost({navigation, route}) {

  return (
    <Input navigation={navigation} route={route} type='Blog' />
  );
}