import { FlatList, StyleSheet, Text, View } from 'react-native';
import BlogCover from '../components/BlogCover';
import blogs from '../dummy/blog';

export default function Blog() {

  const renderBlog = ({item}) => {
    return <BlogCover blog={item} />
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={blogs}
        renderItem={renderBlog}
        keyExtractor={(blog) => blog.user_id.toString()}
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
