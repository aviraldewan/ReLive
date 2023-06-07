import { FlatList, StyleSheet, Text, View } from 'react-native';
import BlogCover from '../components/BlogCover';
import blogs from '../dummy/blog';

export default function Community({navigation}) {

  const renderPost = ({item}) => {
    return <CommunityCover post={item} navigation={navigation} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(post) => post.user_id.toString()}
      />
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
