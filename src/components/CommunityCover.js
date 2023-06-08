import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {useState} from 'react';
import ImageCarousel from './ImageCarousel';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CommunityCover({ post, navigation }) {
  const openPost = () => {
    navigation.navigate('CommunityContent', { post });
  };

  const [like, setLike] = useState(false);

  const updateLike = () => {
    setLike(!like);
  }
  const updateShare = () => {
    return;
  }
  const formatLikeCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    } else {
      return count.toString();
    }
  };

  return (

    <View style={styles.container} >
      <View style={styles.author}>
            <Image
            style={styles.dp}
            source={require('../../assets/favicon.png')}
            resizeMode="contain"
            />
            <View style={styles.nameContainer}>
            <Text style={styles.name}>{post.username}</Text>
            </View>
            <View style={styles.timestampContainer}>
            <Text style={styles.timestamp}>{post.timestamp}</Text>
            </View>
      </View>
      <TouchableOpacity onPress={openPost}>
      <Text numberOfLines={3} style={styles.content}>
        {post.content}
      </Text>
      </TouchableOpacity>
      {post.image.length ? 
        <ImageCarousel post={post} />
       : <View></View> }
       <View style={styles.icons}>
       <TouchableOpacity onPress={updateLike}>
          <View style={{alignItems: 'center', flexDirection: 'row'}}>
            <Ionicons
                name={like ? 'heart' : 'heart-outline'}
                size={24}
                color={like ? 'red' : 'black'}
                style={styles.icon}
            />
           <Text style={styles.label}>{formatLikeCount(post.likes.length)}</Text>
           </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={updateShare}>
            <Ionicons
                name='share-social-outline'
                size={24}
                color='black'
                style={styles.icon}
            />
        </TouchableOpacity>
        <TouchableOpacity onPress={openPost}>
            <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="black"
                style={styles.icon}
            />
        </TouchableOpacity>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'dodgerblue',
    margin: 10,
    padding: 12,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timestamp: {
    color: 'grey',
  },
  dp: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginRight: 10,
    borderColor: 'dodgerblue',
    borderWidth: 1,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  nameContainer: {
    flex: 1,
  },
  timestampContainer: {
    marginLeft: 'auto',
  },
  content: {
    fontSize: 16,
  },
  icons: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  icon: {
    marginHorizontal: 8,
  },
  label: {
    fontSize: 16,
    color: 'black',
  },
});
