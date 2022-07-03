import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/GlobalStyle';
import { Dimensions } from 'react-native';

export default function SongListPreview({ navigation, item }) {

	const [songs, setsong] = useState([]);

	if (songs.length == 0 && item.songsList) {
		setsong(item.songsList);
	}

	const GoToPlaySong = (item) => {
		navigation.navigate('PlaySong', item);
	}

	return (
		<View >
			<Text style={[globalStyles.textWhiteBold24, { marginTop: 20 }]}>{item.name}</Text>

			{navigation && item && item.songsList ?
				<FlatList
					horizontal
					pagingEnabled={true}
					showsHorizontalScrollIndicator={false}
					legacyImplementation={false}
					style={[{ marginTop: 10 }]}
					keyExtractor={(item) => item.id}
					data={songs}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={{ marginRight: 15 }}
							onPress={() => GoToPlaySong(item)}
						>
							<View>

								<ImageBackground
									source={item.url}
									style={styles.coverImage}
									resizeMode='cover'
								/>
								<Text style={[globalStyles.textWhite16, { padding: 0, marginBottom: 0 }]}>{item.name}</Text>
								<Text style={[globalStyles.textGray16, { padding: 0, marginTop: 0 }]}>{item.artists}</Text>
							</View>
						</TouchableOpacity>

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