import { StyleSheet, Text, View } from 'react-native';
import TalkasSaviour from '../components/TalkasSaviour';

export default function Help() {
  return (
    <View style={styles.container}>
      {/* <TalkasSaviour /> */}
      <Text>Hello, World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
