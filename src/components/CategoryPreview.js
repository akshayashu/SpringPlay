import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/GlobalStyle';
import { Dimensions } from 'react-native';

export default function CategoryPreview({ item }) {

  const [song, setsong] = useState([]);

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  return (
    <View style={[globalStyles.container, { flex: 1, marginRight: 10, marginBottom: 10 }]}>
      <ImageBackground
        style={[styles.coverImage, { backgroundColor: generateColor() }]}
      >
        <Text style={globalStyles.textWhiteBold16}>{item.name}</Text>
        <ImageBackground
          style={{width: 70, height: '80%', position: 'absolute', right: 10, top: 20}}
          source={require('../../assets/avici_cover.jpg')}
          resizeMode='cover'
        />
      </ImageBackground>

    </View>
  )
}

const styles = StyleSheet.create({
  coverImage: {
    height: Dimensions.get('window').height / 7,
    width: '100%',
    borderRadius: 10
  },
});