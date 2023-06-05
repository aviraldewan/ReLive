import {StyleSheet, Button} from 'react-native';

export default function TalkasSaviour() {
    
    return (
        <Button
          title="Talk as Saviour"
          style={styles.button}
          onPress={() => {
            
            console.log("Talk as Saviour clicked");

          }}
        />
    );

}

const styles = StyleSheet.create({

    button: {
        backgroundColor: "white",
        color: "dodgerblue",
    },

});