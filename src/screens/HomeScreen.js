import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context' 
import SongListPreview from '../components/SongListPreview';
import { globalStyles } from '../styles/GlobalStyle';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as JsonData from '../models/JsonData';

export default function App() {

	const [category, setCategory] = useState(JsonData.category);

	return (
		<SafeAreaView style={globalStyles.container}>
      <View style={[globalStyles.container20, {paddingRight: 0}]}>

				{/* Header */}
				<View style={globalStyles.flexRow}>
					<Text style={[globalStyles.textWhiteBold24, {flex: 1}]}>Good evening</Text>
					<View style={[globalStyles.flexRow, {marginRight: 10}]}>
						<Ionicons name='notifications' size={24} color='white' style={globalStyles.padding8}/>
						<Ionicons name='timer-outline' size={24} color='white' style={globalStyles.padding8}/>
						<Ionicons name='settings-outline' size={24} color='white' style={globalStyles.padding8}/>
					</View>
				</View>

				<FlatList
					style={[{marginTop: 20}]}
					keyExtractor={(item) => item.id}
					data={category}
					renderItem={({ item }) => (
						<SongListPreview item={item} />
					)}
				/>

			</View>
		</SafeAreaView>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		padding: 10
	},
});
