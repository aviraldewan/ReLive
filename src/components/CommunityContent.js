import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function CommunityContent({ route }) {
  const { post } = route.params;

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
    <ScrollView contentContainerStyle={styles.container}>
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
      <Text style={styles.content}>{post.content}</Text>
      {post.image.length ? 
        <View style={styles.carouselContainer}>
            <Swiper showsButtons={true} loop={false}>
            {post.image.map((image, index) => (
                <View style={styles.imageContainer} key={index}>
                <Image source={image} style={styles.image} resizeMode="contain" />
                </View>
            ))}
            </Swiper>
        </View>
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
            <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="black"
                style={styles.icon}
            />
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  carouselContainer: {
    marginTop: 5,
    height: 300,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderColor: 'dodgerblue',
    borderWidth: 1,
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
