import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function NumericInput() {
  const [value, setValue] = useState('');

  const handleTextChange = (text) => {
   
    const numericValue = text.replace(/[^0-9]/g, '');

    if (numericValue <= 0)
    {
      alert('Fundraising amount must be more than 0');
      return;
    }

    setValue(numericValue);
  };

  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder='Enter Goal Amount'
      onChangeText={handleTextChange}
      keyboardType="numeric"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'dodgerblue',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    width: '70%',
    marginBottom: 20,
  },
});
