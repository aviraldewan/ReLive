import React from 'react';
import { Button } from 'react-native';

export default function getHeaderComponent(screenName) {
  switch (screenName) {
    case 'helpline':
      return (
        <Button
          title="Talk as Saviour"
          onPress={() => {
            // Handle button press for helpline screen
          }}
        />
      );
    case 'chat':
      
    default:
      return null;
  }
};
