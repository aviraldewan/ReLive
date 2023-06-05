import { SafeAreaView, StyleSheet, Text, View, Platform, StatusBar, Image, Button } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function Topbar(props) {

  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  
});
