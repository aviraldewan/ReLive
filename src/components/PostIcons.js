import React, {useState} from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function PostIcons({post, type, onPress}) {

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
            {type === 'cover' ? 
            <TouchableOpacity onPress={onPress}>
                <Ionicons
                    name="chatbubble-ellipses-outline"
                    size={24}
                    color="black"
                    style={styles.icon}
            />
            </TouchableOpacity>
            : <View></View> }
       </View>
  );
}

const styles = StyleSheet.create({
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
