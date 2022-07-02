import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context' 
import SongListPreview from '../components/SongListPreview';

export default function App() {

	const [songs, setSongs] = useState([
		{ name: 'Journey Song', id: "1" },
		{ name: 'Journey Song1', id: "27" },
		{ name: 'Journey Song2', id: "3" },
		{ name: 'Journey Song3', id: "4" },
		{ name: 'Journey Song4', id: "5" },
		{ name: 'Journey Song5', id: "6" },
		{ name: 'Journey Song6', id: "7" },
		{ name: 'Journey Song5', id: "8" },
		{ name: 'Journey Song6', id: "9" },
	]);

	const pressHandler = (id) => {

		// removing the item that is clicked
		setSongs((prevSongs) => {
			// true means filter it out
			// false means keep that item
			return prevSongs.filter(song => song.id != id);
		})

	}
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<View style={styles.container}>

				<FlatList
					numColumns={2}
					keyExtractor={(item) => item.id}
					data={songs}
					renderItem={({ item }) => (
						<SongListPreview item={item} pressHandler={pressHandler} />
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
