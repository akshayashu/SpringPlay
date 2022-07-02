import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/GlobalStyle';
import { Dimensions } from 'react-native';

export default function SongListPreview({ item }) {

	const [song, setsong] = useState([]);

	if (song.length == 0 && item.songsList) {
		setsong(item.songsList);
	}

	return (
		<View >
			<Text style={[globalStyles.textWhiteBold24, { marginTop: 20 }]}>{item.name}</Text>

			{item && item.songsList ?
				<FlatList
					horizontal
					pagingEnabled={true}
					showsHorizontalScrollIndicator={false}
					legacyImplementation={false}
					style={[{ marginTop: 10 }]}
					keyExtractor={(item) => item.id}
					data={song}
					renderItem={({ item }) => (
						<View style={{ marginRight: 15 }}>

							<ImageBackground
								source={item.url}
								style={styles.coverImage}
								resizeMode='cover'
							/>
							<Text style={[globalStyles.textWhite16, { padding: 0, marginBottom: 0 }]}>{item.name}</Text>
							<Text style={[globalStyles.textGray16, { padding: 0, marginTop: 0 }]}>{item.artists}</Text>
						</View>
					)}
				/>
				:
				<Text style={globalStyles.textWhite16}>Loading Data...</Text>
				}
		</View>
	)
}

const styles = StyleSheet.create({
	coverImage: {
		height: Dimensions.get('window').height / 4.5,
		width: Dimensions.get('window').height / 4.5,
	},
});