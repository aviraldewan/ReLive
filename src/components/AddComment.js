import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView } from 'react-native';
import Input from './Input';

export default function AddComment({navigation, route}) {

  return (
    <Input navigation={navigation} route={route} type='Comment' />
  );
}