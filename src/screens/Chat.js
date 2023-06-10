import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ChatSection() {
  const [selectedOption, setSelectedOption] = useState('group');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderChat = ({item}) => {
    return <ChatCover chat={item} navigation={navigation} />
  }

  const renderChats = () => {
    if (selectedOption === 'group') {
      return (
        <View>
          <FlatList
        data={chats}
        renderItem={renderChat}
        keyExtractor={(chat) => chat.user_id.toString()}
      />
        </View>
      );
    } else if (selectedOption === 'dm') {
      return (
        <View>
          <FlatList
        data={chats}
        renderItem={renderChat}
        keyExtractor={(chat) => chat.user_id.toString()}
      />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={[styles.option, selectedOption === 'group' && styles.selectedOption]}
          onPress={() => handleOptionSelect('group')}
        >
          <Text style={[styles.optionText, selectedOption === 'group' && styles.selectedOptionText]}>Group Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, selectedOption === 'dm' && styles.selectedOption]}
          onPress={() => handleOptionSelect('dm')}
        >
          <Text style={[styles.optionText, selectedOption === 'dm' && styles.selectedOptionText]}>Direct Messages</Text>
        </TouchableOpacity>
      </View>
      {renderChats()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  option: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'dodgerblue',
    borderRadius: 5,
    marginRight: 10,
  },
  selectedOption: {
    backgroundColor: 'dodgerblue',
  },
  optionText: {
    color: 'dodgerblue',
    fontWeight: 'bold',
  },
  selectedOptionText: {
    color: 'white',
  },
});
