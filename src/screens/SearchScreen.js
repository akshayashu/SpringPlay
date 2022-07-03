import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput } from 'react-native';
import { globalStyles } from '../styles/GlobalStyle';
import Ionicons from '@expo/vector-icons/Ionicons';
import CategoryPreview from '../components/CategoryPreview';
import * as JsonData from '../models/JsonData';
import HomeFooter from '../components/HomeFooter';

export default function SearchScreen({ navigation }) {

  const [category, setCategory] = useState(JsonData.AllCategory);

  return (
    <View style={[globalStyles.container, { paddingLeft: 20, paddingTop: 20 }]}>

      {/* title */}
      <Text style={globalStyles.textWhiteBold24}>Search</Text>

      {/* search bar */}
      <View style={[globalStyles.flexRow, globalStyles.textInputWhite20, {marginEnd: 10, marginTop: 20}]}>
        <Ionicons 
          name='search-outline'
          size={20}
          color='gray'
        />
        <TextInput 
          placeholder='Artists, songs and podcasts'
          style={[globalStyles.textBlack16, {flex: 1}]}
        />
      </View>

      <FlatList
        numColumns={2}
        ListFooterComponent={HomeFooter}
				style={[{ marginTop: 20 }]}
				keyExtractor={(item) => item.id}
				data={category}
				renderItem={({ item }) => (
					<CategoryPreview item={item} />
				)}
			/>

    </View>
  )
}
