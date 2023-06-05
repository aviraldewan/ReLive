import {View, StyleSheet, Button} from 'react-native';

export default function SpecialButton({title, pressFunction, color}) {
    
    return(
        <View style={[styles.buttonContainer]}>
            <Button title={title} onPress={pressFunction} color={color} />
        </View>
    );

};

const styles = StyleSheet.create({
    buttonContainer: {
      overflow: 'hidden',
      width: 120,
      height: 80,
    },
  });
  
  