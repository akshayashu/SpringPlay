import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/GlobalStyle';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function LibraryPreview({ item }) {

  const [song, setsong] = useState([]);

  if (song.length == 0 && item.songsList) {
		setsong(item.songsList);
	}

  return (
    <View style={[globalStyles.container, globalStyles.flexRow, { flex: 1, marginRight: 10, marginBottom: 10 }]}>
      <ImageBackground
        style={[styles.coverImage, globalStyles.containerCenter, { backgroundColor: 'pink' }]}
      >
        <Ionicons
          name='heart'
          size={30}
          color='white'
        />
      </ImageBackground>
      <View>
        <Text style={globalStyles.textWhiteBold16}>{item.name}</Text>
        <Text style={globalStyles.textGray16}>{item.songsList.length} songs</Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  coverImage: {
    height: 75,
    width: 75,
  },
});