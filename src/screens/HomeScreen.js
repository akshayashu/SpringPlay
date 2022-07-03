import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import SongListPreview from '../components/SongListPreview';
import { globalStyles } from '../styles/GlobalStyle';
import * as JsonData from '../models/JsonData';
import HomeHeader from '../components/HomeHeader';
import HomeFooter from '../components/HomeFooter'

export default function HomeScreen({ navigation }) {

	const [category, setCategory] = useState(JsonData.category);

	return (
		<View style={[globalStyles.container, { paddingLeft: 20 }]}>

			<FlatList
				ListHeaderComponent={<HomeHeader />}
				ListFooterComponent={<HomeFooter />}
				style={[{ marginTop: 20 }]}
				keyExtractor={(item) => item.id}
				data={category}
				renderItem={({ item }) => (
					<SongListPreview item={item} navigation={navigation}/>
				)}
			/>

		</View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		padding: 10
	},
});
