import React from 'react';
import { StyleSheet, View } from 'react-native';
import SpecialButton from './SpecialButton';

export default function TalkasSaviour() {

  const chatasSaviour = () => {
    console.log("Chat as Saviour button pressed");
  };

  return (
    <View>
      <SpecialButton
        title="Chat as Saviour"
        pressFunction={chatasSaviour}
        color="tomato"
      />
    </View>
  );
}