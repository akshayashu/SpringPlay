import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/GlobalStyle';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as JsonData from '../models/JsonData';
import HomeFooter from '../components/HomeFooter';
import { COLORS } from '../styles/Color';
import LibraryPreview from '../components/LibraryPreview';

export default function LibraryScreen({ navigation }) {

  const [library, setLibrary] = useState(JsonData.Library);

  return (
    <View style={[globalStyles.container]}>

      <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
        <View
          style={[globalStyles.flexRow, globalStyles.shadowWhite]}
        >
          {/* title */}
          <ImageBackground
            style={[styles.coverImage]}
            imageStyle={{ borderRadius: 40 }}
            source={require('../../assets/avici_cover3.jpg')}
            resizeMode='cover'
          />
          <Text style={[globalStyles.textWhiteBold24, { flex: 1 }]}> Your Library</Text>

          <View style={[globalStyles.flexRow, { marginRight: 10 }]}>
            <Ionicons name='search' size={24} color='white' style={globalStyles.padding8} />
            <Ionicons name='add-circle' size={24} color='white' style={globalStyles.padding8} />
          </View>
        </View>
      </View>


      <FlatList
        ListFooterComponent={HomeFooter}
        style={[{ marginTop: 20, paddingStart: 10 }]}
        keyExtractor={(item) => item.id}
        data={library}
        renderItem={({ item }) => (
          <LibraryPreview item={item} />
        )}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  coverImage: {
    borderRadius: 10,
    width: 40, 
    height: 40
  },
});

