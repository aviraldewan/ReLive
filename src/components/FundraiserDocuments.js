import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import Swiper from 'react-native-swiper';

export default function FundraiserDocuments({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <View style={styles.carouselContainer}>
      <Swiper showsButtons={true} loop={false}>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            style={styles.imageContainer}
            onPress={() => handleImagePress(image)}
          >
            <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
          </TouchableOpacity>
        ))}
      </Swiper>

      <Modal visible={selectedImage !== null} transparent={true}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
          <Image source={{ uri: selectedImage }} style={styles.expandedImage} resizeMode="contain" />
        </View>
      </Modal>
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
    width: '50%',
    height: '100%',
    borderRadius: 10,
    borderColor: 'dodgerblue',
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'dodgerblue',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  expandedImage: {
    width: '80%',
    height: '80%',
    borderRadius: 10,
    borderColor: 'dodgerblue',
    borderWidth: 1,
  },
});
