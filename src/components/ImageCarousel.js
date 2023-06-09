import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default function ImageCarousel({post}) {

    return (
        <View style={styles.carouselContainer}>
            <Swiper showsButtons={true} loop={false}>
            {post.image.map((image, index) => (
                <View style={styles.imageContainer} key={index}>
                <Image source={image} style={styles.image} resizeMode="contain" />
                </View>
            ))}
            </Swiper>
        </View>
    );

}

const styles = StyleSheet.create({
    carouselContainer: {
        marginTop: 5,
        height: 200,
      },
      imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: '70%',
        height: '100%',
        borderRadius: 10,
        borderColor: 'dodgerblue',
        borderWidth: 1,
      },
});